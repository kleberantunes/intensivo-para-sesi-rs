// Módulo de Autenticação com Google e Sincronização em Nuvem (Firebase)
// Intensivo para SESI-RS

(async function () {
  const config = window.FIREBASE_CONFIG;
  const isConfigured = config && config.apiKey && config.apiKey !== "SUA_API_KEY";

  let auth = null;
  let db = null;
  let currentUser = null;
  let saveTimeout = null;
  let pendingStateToSave = null;

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

  // Fila de sincronização ativa imediatamente para não perder nenhum clique inicial
  window.cloudSync = {
    isReady: () => !!(currentUser && db),
    scheduleSave: (state) => {
      pendingStateToSave = state;
      if (!currentUser || !db) return;
      setSyncStatus("Alterações pendentes...", "⏳", true);
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        syncToCloud(state);
      }, 1000);
    },
    flushSave: async () => {
      if (saveTimeout) {
        clearTimeout(saveTimeout);
        saveTimeout = null;
      }
      if (pendingStateToSave && currentUser && db) {
        await syncToCloud(pendingStateToSave);
      }
    }
  };

  // Garante que o progresso seja gravado se o aluno fechar ou trocar de aba no celular/navegador
  window.addEventListener("beforeunload", () => {
    if (window.cloudSync && typeof window.cloudSync.flushSave === "function") {
      window.cloudSync.flushSave();
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && window.cloudSync && typeof window.cloudSync.flushSave === "function") {
      window.cloudSync.flushSave();
    }
  });

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
    return;
  }

  // Função de fusão (merge) inteligente entre estado local e da nuvem
  function mergeStates(local, cloud) {
    if (!cloud) return local;
    if (!local) return cloud;

    const merged = { ...local };

    // Se a nuvem tem mais questões respondidas, herdamos o placar da nuvem;
    // Se o dispositivo local tem mais ou igual, mantemos o local mais avançado.
    const cloudAns = typeof cloud.answered === "number" ? cloud.answered : 0;
    const localAns = typeof local.answered === "number" ? local.answered : 0;
    if (cloudAns > localAns) {
      merged.answered = cloudAns;
      merged.correct = typeof cloud.correct === "number" ? cloud.correct : 0;
    } else {
      merged.answered = localAns;
      merged.correct = typeof local.correct === "number" ? local.correct : 0;
    }

    // Funde o histórico de erros evitando duplicações por texto da questão
    const errorMap = new Map();
    (cloud.errors || []).forEach(e => { if (e && e.question) errorMap.set(e.question, e); });
    (local.errors || []).forEach(e => { if (e && e.question) errorMap.set(e.question, e); });
    merged.errors = Array.from(errorMap.values());

    // Funde os tópicos com o maior número de tentativas e acertos
    merged.topics = { ...(cloud.topics || {}) };
    Object.entries(local.topics || {}).forEach(([k, v]) => {
      if (!v) return;
      if (!merged.topics[k]) {
        merged.topics[k] = v;
      } else {
        merged.topics[k] = {
          a: Math.max(merged.topics[k].a || 0, v.a || 0),
          c: Math.max(merged.topics[k].c || 0, v.c || 0)
        };
      }
    });

    // Redação: mantém a mais completa ou com mais texto
    const localEssay = (local.essay || "").trim();
    const cloudEssay = (cloud.essay || "").trim();
    if (cloudEssay.length > localEssay.length) {
      merged.essay = cloud.essay;
    } else {
      merged.essay = local.essay || "";
    }

    // Checks da redação
    merged.checks = { ...(cloud.checks || {}), ...(local.checks || {}) };

    // Módulos completados (união dos conjuntos)
    const completedSet = new Set([...(cloud.completed || []), ...(local.completed || [])]);
    merged.completed = Array.from(completedSet);

    // Questões já visualizadas
    merged.seen = { ...(cloud.seen || {}) };
    Object.entries(local.seen || {}).forEach(([k, list]) => {
      const set = new Set([...(merged.seen[k] || []), ...(Array.isArray(list) ? list : [])]);
      merged.seen[k] = Array.from(set);
    });

    // Funde o histórico de redações evitando duplicações por id ou prompt+timestamp
    const historyMap = new Map();
    (cloud.essayHistory || []).forEach(h => {
      if (h && (h.id || h.timestamp)) historyMap.set(h.id || (h.prompt + '_' + h.timestamp), h);
    });
    (local.essayHistory || []).forEach(h => {
      if (h && (h.id || h.timestamp)) historyMap.set(h.id || (h.prompt + '_' + h.timestamp), h);
    });
    const mergedHistory = Array.from(historyMap.values());
    mergedHistory.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    merged.essayHistory = mergedHistory;

    return merged;
  }

  // Prepara payload estritamente válido para o Firestore (sem valores undefined)
  function buildFirestoreData(state, user, extra = {}) {
    return {
      answered: typeof state.answered === "number" ? state.answered : 0,
      correct: typeof state.correct === "number" ? state.correct : 0,
      errors: Array.isArray(state.errors) ? state.errors : [],
      topics: (state.topics && typeof state.topics === "object") ? state.topics : {},
      essay: typeof state.essay === "string" ? state.essay : "",
      essayHistory: Array.isArray(state.essayHistory) ? state.essayHistory : [],
      checks: (state.checks && typeof state.checks === "object") ? state.checks : {},
      completed: Array.isArray(state.completed) ? state.completed : [],
      seen: (state.seen && typeof state.seen === "object") ? state.seen : {},
      lastUpdated: Date.now(),
      userEmail: user.email || "",
      userName: user.displayName || "Estudante",
      userPhoto: user.photoURL || "",
      ...extra
    };
  }

  // Sincronização para a nuvem
  async function syncToCloud(state) {
    if (!currentUser || !db || !state) return;
    try {
      setSyncStatus("Salvando...", "⏳", true);
      const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const userRef = doc(db, "users", currentUser.uid);
      const dataToSave = buildFirestoreData(state, currentUser);

      await setDoc(userRef, dataToSave, { merge: true });
      pendingStateToSave = null;
      setSyncStatus("Salvo", "☁️", false);
    } catch (err) {
      console.error("Erro ao salvar progresso na nuvem:", err);
      setSyncStatus("Erro ao sincronizar", "⚠️", false);
    }
  }

  try {
    // Importação dinâmica dos módulos Firebase CDN (ESM oficial)
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

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
            const dataToUpdate = buildFirestoreData(merged, user, {
              status: cloudData.status || "active",
              lastLoginAt: Date.now()
            });
            await setDoc(userRef, dataToUpdate, { merge: true });
          } else if (localState) {
            // Primeiro login deste usuário: salva o estado local dele na nuvem
            const initialData = buildFirestoreData(localState, user, {
              status: "active",
              createdAt: Date.now(),
              lastLoginAt: Date.now()
            });
            await setDoc(userRef, initialData, { merge: true });
          }

          // Se havia alguma gravação pendente antes do auth terminar, grava agora
          if (pendingStateToSave) {
            await syncToCloud(pendingStateToSave);
          }

          setSyncStatus("Sincronizado", "☁️", false);
          if (typeof window.toast === "function") {
            window.toast(`Bem-vindo, ${(user.displayName || "").split(" ")[0]}! Progresso salvo na nuvem.`);
          }
        } catch (err) {
          console.error("Erro ao carregar dados do usuário:", err);
          setSyncStatus("Offline / Local", "📱", false);
        }
        const existingBanner = document.getElementById("loginPromptBanner");
        if (existingBanner) existingBanner.remove();
      } else {
        // UI deslogado
        if (loginBtn) loginBtn.classList.remove("hidden");
        if (userProfile) userProfile.classList.add("hidden");
        setSyncStatus("", "");

        // Se o estudante tem questões feitas salvas localmente, avisa para conectar e salvar na nuvem
        const localState = window.getAppState ? window.getAppState() : null;
        if (localState && localState.answered > 0 && !document.getElementById("loginPromptBanner")) {
          const banner = document.createElement("div");
          banner.id = "loginPromptBanner";
          banner.style.cssText = "background:#fff8df; border:1px solid #ffd566; color:#784900; padding:12px 18px; border-radius:12px; margin:16px auto; max-width:1180px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-weight:700; font-size:0.9rem; box-shadow:0 4px 12px rgba(16,35,63,0.05);";
          banner.innerHTML = `
            <span>⚠️ Você tem <b>${localState.answered} questão(ões)</b> feitas neste aparelho. Conecte sua conta Google para enviar ao professor.</span>
            <button onclick="document.getElementById('loginBtn').click()" class="btn-sm" style="background:#10233f; color:#fff; border:0; border-radius:8px; padding:8px 14px; font-weight:700; cursor:pointer;">
              Conectar com Google e Enviar
            </button>
          `;
          const appMain = document.getElementById("app");
          if (appMain && appMain.parentNode) {
            appMain.parentNode.insertBefore(banner, appMain);
          }
        }
      }
    });

    // Clique no selo de nuvem para forçar sincronização imediata
    if (syncStatus) {
      syncStatus.style.cursor = "pointer";
      syncStatus.title = "Clique para sincronizar com a nuvem agora";
      syncStatus.onclick = async () => {
        if (!currentUser) {
          if (loginBtn) loginBtn.click();
          return;
        }
        setSyncStatus("Sincronizando...", "⏳", true);
        const st = window.getAppState ? window.getAppState() : null;
        if (st) {
          await syncToCloud(st);
          if (typeof window.toast === "function") window.toast("Progresso sincronizado com a nuvem! ☁️");
        }
      };
    }

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
          if (window.cloudSync && typeof window.cloudSync.flushSave === "function") {
            await window.cloudSync.flushSave();
          }
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
