// Módulo de Autenticação com Google e Sincronização em Nuvem (Firebase)
// Intensivo para SESI-RS

(async function () {
  const config = window.FIREBASE_CONFIG;
  const isConfigured = config && config.apiKey && config.apiKey !== "SUA_API_KEY";

  let auth = null;
  let db = null;
  let currentUser = null;
  let saveTimeout = null;

  // Elementos da interface
  const loginBtn = document.getElementById("loginBtn");
  const userProfile = document.getElementById("userProfile");
  const userAvatar = document.getElementById("userAvatar");
  const userName = document.getElementById("userName");
  const syncStatus = document.getElementById("syncStatus");
  const logoutBtn = document.getElementById("logoutBtn");

  function setSyncStatus(text, icon = "☁️", isPending = false) {
    if (!syncStatus) return;
    syncStatus.textContent = `${icon} ${text}`.trim();
    syncStatus.className = `sync-badge ${isPending ? 'pending' : 'synced'}`;
  }

  function showSetupModal() {
    let modal = document.getElementById("authSetupModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "authSetupModal";
      modal.className = "auth-modal-overlay";
      modal.innerHTML = `
        <div class="auth-modal">
          <div class="auth-modal-header">
            <h3>Conectar com Google & Salvar na Nuvem</h3>
            <button class="auth-modal-close" onclick="document.getElementById('authSetupModal').remove()">&times;</button>
          </div>
          <div class="auth-modal-body">
            <p>Para ativar o login com Google no seu projeto compartilhado:</p>
            <ol>
              <li>Acesse o <a href="https://console.firebase.google.com" target="_blank" rel="noopener">Firebase Console</a> e crie um projeto gratuito.</li>
              <li>Vá em <b>Authentication</b> &gt; <b>Sign-in method</b> e ative o <b>Google</b>.</li>
              <li>Vá em <b>Firestore Database</b>, crie o banco e aplique as regras de segurança de <code>firestore.rules</code>.</li>
              <li>Copie os dados da Web App e cole no arquivo <code>dist/firebase-config.js</code>.</li>
            </ol>
            <div class="auth-modal-tip">
              💡 <b>Nota:</b> Enquanto o Firebase não for configurado com as suas credenciais, o seu progresso continua sendo salvo com segurança localmente neste navegador!
            </div>
          </div>
          <div class="auth-modal-footer">
            <button class="btn" onclick="document.getElementById('authSetupModal').remove()">Entendido</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  // Se não configurado, exibe aviso instruindo como configurar ao clicar
  if (!isConfigured) {
    if (loginBtn) {
      loginBtn.addEventListener("click", showSetupModal);
    }
    // Define cloudSync stub
    window.cloudSync = {
      isReady: () => false,
      scheduleSave: () => {}
    };
    return;
  }

  try {
    // Importação dinâmica dos módulos Firebase CDN (ESM oficial)
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

    // Função de fusão (merge) inteligente entre estado local e da nuvem
    function mergeStates(local, cloud) {
      if (!cloud) return local;
      if (!local) return cloud;

      const merged = { ...local };

      // Se a nuvem tem mais questões respondidas, herdamos o placar da nuvem
      if ((cloud.answered || 0) >= (local.answered || 0)) {
        merged.answered = cloud.answered;
        merged.correct = cloud.correct || 0;
      }

      // Funde o histórico de erros evitando duplicações por texto da questão
      const errorMap = new Map();
      (cloud.errors || []).forEach(e => errorMap.set(e.question, e));
      (local.errors || []).forEach(e => errorMap.set(e.question, e));
      merged.errors = Array.from(errorMap.values());

      // Funde os tópicos
      merged.topics = { ...(cloud.topics || {}) };
      Object.entries(local.topics || {}).forEach(([k, v]) => {
        if (!merged.topics[k]) {
          merged.topics[k] = v;
        } else {
          merged.topics[k] = {
            a: Math.max(merged.topics[k].a, v.a),
            c: Math.max(merged.topics[k].c, v.c)
          };
        }
      });

      // Redação: mantém a mais completa ou mais recente
      if (cloud.essay && (!local.essay || cloud.essay.length > local.essay.length)) {
        merged.essay = cloud.essay;
      }

      // Checks da redação
      merged.checks = { ...(cloud.checks || {}), ...(local.checks || {}) };

      // Módulos completados (união dos conjuntos)
      const completedSet = new Set([...(cloud.completed || []), ...(local.completed || [])]);
      merged.completed = Array.from(completedSet);

      // Questões já visualizadas
      merged.seen = { ...(cloud.seen || {}) };
      Object.entries(local.seen || {}).forEach(([k, list]) => {
        const set = new Set([...(merged.seen[k] || []), ...(list || [])]);
        merged.seen[k] = Array.from(set);
      });

      return merged;
    }

    // Sincronização para a nuvem com debounce
    async function syncToCloud(state) {
      if (!currentUser || !db) return;
      try {
        setSyncStatus("Salvando...", "⏳", true);
        const userRef = doc(db, "users", currentUser.uid);
        const dataToSave = {
          ...state,
          lastUpdated: Date.now(),
          userEmail: currentUser.email,
          userName: currentUser.displayName
        };
        await setDoc(userRef, dataToSave, { merge: true });
        setSyncStatus("Salvo", "☁️", false);
      } catch (err) {
        console.error("Erro ao salvar progresso na nuvem:", err);
        setSyncStatus("Erro ao sincronizar", "⚠️", false);
      }
    }

    // Interface pública de sincronização
    window.cloudSync = {
      isReady: () => !!currentUser,
      scheduleSave: (state) => {
        if (!currentUser) return;
        setSyncStatus("Alterações pendentes...", "⏳", true);
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
          syncToCloud(state);
        }, 1200);
      }
    };

    // Monitoramento do estado de autenticação
    onAuthStateChanged(auth, async (user) => {
      currentUser = user;
      if (user) {
        // UI logado
        if (loginBtn) loginBtn.classList.add("hidden");
        if (userProfile) userProfile.classList.remove("hidden");
        if (userAvatar) {
          userAvatar.src = user.photoURL || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2366758a'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
          userAvatar.alt = user.displayName || "Usuário";
        }
        if (userName) {
          const firstName = (user.displayName || "Estudante").split(" ")[0];
          userName.textContent = firstName;
        }

        // Verifica se é administrador
        const adminList = window.ADMIN_EMAILS || ["djkleber@gmail.com"];
        const isAdmin = adminList.includes(user.email);
        let adminLink = document.getElementById("adminPanelLink");
        if (isAdmin) {
          if (!adminLink) {
            adminLink = document.createElement("a");
            adminLink.id = "adminPanelLink";
            adminLink.href = "admin.html";
            adminLink.className = "btn-admin-nav";
            adminLink.innerHTML = "⚙️ Painel Admin";
            const authContainer = document.getElementById("authContainer");
            if (authContainer) authContainer.prepend(adminLink);
          }
          adminLink.classList.remove("hidden");
        } else if (adminLink) {
          adminLink.classList.add("hidden");
        }

        setSyncStatus("Sincronizando...", "⏳", true);

        // Carrega dados da nuvem
        try {
          const userRef = doc(db, "users", user.uid);
          const snap = await getDoc(userRef);
          const localState = window.getAppState ? window.getAppState() : null;

          if (snap.exists()) {
            const cloudData = snap.data();
            // Verificação de controle de acesso: usuário bloqueado
            if (cloudData.status === "blocked") {
              setSyncStatus("Acesso suspenso", "🚫", false);
              alert("Seu acesso a esta plataforma foi suspenso pelo administrador. Entre em contato com a coordenação.");
              await signOut(auth);
              return;
            }

            const merged = mergeStates(localState, cloudData);
            if (window.applyCloudState) {
              window.applyCloudState(merged);
            }
            // Garante que o estado mais recente esteja atualizado na nuvem também
            await setDoc(userRef, {
              ...merged,
              status: cloudData.status || "active",
              lastLoginAt: Date.now(),
              lastUpdated: Date.now(),
              userEmail: user.email,
              userName: user.displayName,
              userPhoto: user.photoURL || ""
            }, { merge: true });
          } else if (localState) {
            // Primeiro login deste usuário: salva o estado local dele na nuvem
            await setDoc(userRef, {
              ...localState,
              status: "active",
              createdAt: Date.now(),
              lastLoginAt: Date.now(),
              lastUpdated: Date.now(),
              userEmail: user.email,
              userName: user.displayName,
              userPhoto: user.photoURL || ""
            });
          }

          setSyncStatus("Sincronizado", "☁️", false);
          if (typeof window.toast === "function") {
            window.toast(`Bem-vindo, ${(user.displayName || "").split(" ")[0]}! Progresso salvo na nuvem.`);
          }
        } catch (err) {
          console.error("Erro ao carregar dados do usuário:", err);
          setSyncStatus("Offline / Local", "📱", false);
        }
      } else {
        // UI deslogado
        if (loginBtn) loginBtn.classList.remove("hidden");
        if (userProfile) userProfile.classList.add("hidden");
        setSyncStatus("", "");
      }
    });

    // Eventos de clique
    if (loginBtn) {
      loginBtn.addEventListener("click", async () => {
        try {
          loginBtn.disabled = true;
          loginBtn.style.opacity = "0.7";
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
        } catch (err) {
          console.error("Erro durante o login com Google:", err);
          if (err.code !== "auth/popup-closed-by-user" && typeof window.toast === "function") {
            window.toast("Não foi possível conectar ao Google. Verifique o pop-up.");
          }
        } finally {
          if (loginBtn) {
            loginBtn.disabled = false;
            loginBtn.style.opacity = "1";
          }
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        try {
          await signOut(auth);
          if (typeof window.toast === "function") {
            window.toast("Você saiu da conta.");
          }
        } catch (err) {
          console.error("Erro ao desconectar:", err);
        }
      });
    }

  } catch (err) {
    console.error("Falha ao inicializar o Firebase:", err);
    if (loginBtn) {
      loginBtn.addEventListener("click", showSetupModal);
    }
  }
})();
