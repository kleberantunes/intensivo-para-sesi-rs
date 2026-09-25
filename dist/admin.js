// Lógica do Painel de Controle de Acesso e Gestão de Estudantes
// Intensivo para SESI-RS

(async function () {
  const config = window.FIREBASE_CONFIG;
  const adminEmails = window.ADMIN_EMAILS || ["djkleber@gmail.com"];

  // Elementos do DOM
  const loadingState = document.getElementById("loadingState");
  const authGate = document.getElementById("authGate");
  const gateMessage = document.getElementById("gateMessage");
  const gateLoginBtn = document.getElementById("gateLoginBtn");
  const dashboardView = document.getElementById("dashboardView");
  const adminProfile = document.getElementById("adminProfile");
  const adminAvatar = document.getElementById("adminAvatar");
  const adminName = document.getElementById("adminName");
  const adminLogoutBtn = document.getElementById("adminLogoutBtn");

  const kpiTotalUsers = document.getElementById("kpiTotalUsers");
  const kpiActiveUsers = document.getElementById("kpiActiveUsers");
  const kpiBlockedUsers = document.getElementById("kpiBlockedUsers");
  const kpiTotalQuestions = document.getElementById("kpiTotalQuestions");
  const kpiAverageRate = document.getElementById("kpiAverageRate");

  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const sortBy = document.getElementById("sortBy");
  const refreshBtn = document.getElementById("refreshBtn");
  const usersTableBody = document.getElementById("usersTableBody");
  const detailModalContainer = document.getElementById("detailModalContainer");

  let auth = null;
  let db = null;
  let currentAdmin = null;
  let allStudents = [];
  let unsubscribeRealtime = null;
  let currentModalUserId = null;
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";

  function toast(msg) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.style.cssText = "position:fixed;right:20px;bottom:20px;background:#10233f;color:#fff;padding:12px 18px;border-radius:12px;z-index:9999;box-shadow:0 10px 30px rgba(16,35,63,0.3);font-size:0.9rem;font-weight:700;";
    t.style.display = "block";
    setTimeout(() => { t.style.display = "none"; }, 2500);
  }

  function formatDate(timestamp) {
    if (!timestamp) return "Nunca acessou";
    const d = new Date(timestamp);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  // Importação dinâmica do Firebase SDK v10 (ESM oficial)
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, collection, doc, setDoc, onSnapshot } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

    // Monitoramento de login
    onAuthStateChanged(auth, async (user) => {
      loadingState.classList.add("hidden");
      currentAdmin = user;

      if (!user || user.isAnonymous) {
        if (unsubscribeRealtime) {
          unsubscribeRealtime();
          unsubscribeRealtime = null;
        }
        dashboardView.classList.add("hidden");
        adminProfile.classList.add("hidden");
        authGate.classList.remove("hidden");
        gateMessage.textContent = "Este painel é de acesso exclusivo para a administração. Faça login com a conta Google autorizada.";
        gateLoginBtn.classList.remove("hidden");
        return;
      }

      const isAdmin = adminEmails.includes(user.email);
      if (!isAdmin) {
        if (unsubscribeRealtime) {
          unsubscribeRealtime();
          unsubscribeRealtime = null;
        }
        dashboardView.classList.add("hidden");
        adminProfile.classList.add("hidden");
        authGate.classList.remove("hidden");
        gateMessage.innerHTML = `A conta <b>${user.email}</b> não tem privilégios de administrador.<br>Acesse com a conta cadastrada ou volte para o aplicativo.`;
        gateLoginBtn.classList.add("hidden");
        return;
      }

      // Usuário autenticado e com permissão
      authGate.classList.add("hidden");
      dashboardView.classList.remove("hidden");
      adminProfile.classList.remove("hidden");

      if (adminAvatar) {
        adminAvatar.src = user.photoURL || defaultAvatar;
      }
      if (adminName) {
        adminName.textContent = (user.displayName || "Admin").split(" ")[0];
      }

      startRealtimeListener();
    });

    // Monitoramento e sincronização em TEMPO REAL de todos os estudantes no Firestore
    function startRealtimeListener() {
      if (unsubscribeRealtime) {
        unsubscribeRealtime();
        unsubscribeRealtime = null;
      }

      usersTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--muted);">Conectando em tempo real aos estudantes...</td></tr>`;

      unsubscribeRealtime = onSnapshot(collection(db, "users"), (snap) => {
        allStudents = [];

        snap.forEach((d) => {
          const raw = d.data();
          const data = {...raw, ...window.AKProgress.normalize(raw)};
          allStudents.push({
            id: d.id,
            ...data,
            name: data.isAnonymous ? 'Usuário não logado · ' + d.id.slice(0,6) : data.userName || "Estudante sem nome",
            email: data.isAnonymous ? 'Visitante · progresso deste navegador' : data.userEmail || "Sem e-mail",
            photo: data.userPhoto || "",
            status: data.status || "active",
            answered: typeof data.answered === "number" ? data.answered : 0,
            correct: typeof data.correct === "number" ? data.correct : 0,
            errors: Array.isArray(data.errors) ? data.errors : [],
            essay: typeof data.essay === "string" ? data.essay : "",
            checks: (data.checks && typeof data.checks === "object") ? data.checks : {},
            completed: Array.isArray(data.completed) ? data.completed : [],
            topics: (data.topics && typeof data.topics === "object") ? data.topics : {},
            essayHistory: Array.isArray(data.essayHistory) ? data.essayHistory : [],
            lastUpdated: data.lastUpdated || data.lastLoginAt || 0,
            createdAt: data.createdAt || 0
          });
        });

        // The signed-in row now owns this visitor's transferred history; don't count it twice.
        const transferred = new Set(allStudents.map(u => u.guestOriginUid).filter(Boolean));
        allStudents = allStudents.filter(u => !u.isAnonymous || !transferred.has(u.id));

        renderKPIs();
        renderTable();

        // Se houver um modal de detalhes aberto para um aluno, atualiza em tempo real
        if (currentModalUserId) {
          renderDetailModalContent(currentModalUserId);
        }
      }, (err) => {
        console.error("Erro no listener em tempo real:", err);
        usersTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--red);">Erro ao consultar estudantes: ${err.message}</td></tr>`;
      });
    }

    function renderKPIs() {
      const total = allStudents.length;
      const active = allStudents.filter(u => u.status !== "blocked").length;
      const blocked = allStudents.filter(u => u.status === "blocked").length;
      const totalQ = allStudents.reduce((sum, u) => sum + u.answered, 0);

      const withAnswers = allStudents.filter(u => u.answered > 0);
      const avgRate = withAnswers.length
        ? Math.round(withAnswers.reduce((sum, u) => sum + (u.correct / u.answered), 0) / withAnswers.length * 100)
        : 0;

      kpiTotalUsers.textContent = total;
      kpiActiveUsers.textContent = active;
      kpiBlockedUsers.textContent = blocked;
      kpiTotalQuestions.textContent = totalQ;
      kpiAverageRate.textContent = `${avgRate}%`;
    }

    function renderTable() {
      const query = (searchInput.value || "").toLowerCase().trim();
      const status = statusFilter.value;
      const sort = sortBy.value;

      let filtered = allStudents.filter(u => {
        const matchesQuery = u.name.toLowerCase().includes(query) || u.email.toLowerCase().includes(query);
        const matchesStatus = status === "all" || (status === "guests" && u.isAnonymous) || (status === "registered" && !u.isAnonymous) || (status === "active" && u.status !== "blocked") || (status === "blocked" && u.status === "blocked");
        return matchesQuery && matchesStatus;
      });

      // Ordenação
      filtered.sort((a, b) => {
        if (sort === "lastActive") return (b.lastUpdated || 0) - (a.lastUpdated || 0);
        if (sort === "questions") return (b.answered || 0) - (a.answered || 0);
        if (sort === "rate") {
          const rateA = a.answered ? a.correct / a.answered : 0;
          const rateB = b.answered ? b.correct / b.answered : 0;
          return rateB - rateA;
        }
        if (sort === "name") return a.name.localeCompare(b.name);
        return 0;
      });

      if (!filtered.length) {
        usersTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:40px; color:var(--muted);">Nenhum estudante encontrado com os filtros selecionados.</td></tr>`;
        return;
      }

      usersTableBody.innerHTML = filtered.map(u => {
        const isBlocked = u.status === "blocked";
        const rate = u.answered ? Math.round(u.correct / u.answered * 100) : 0;
        const rateClass = rate >= 70 ? "good" : rate >= 50 ? "warn" : "bad";
        const wordCount = u.essay ? u.essay.trim().split(/\s+/).filter(Boolean).length : 0;
        const socioDone = u.completed && u.completed.includes("socio");
        const checkedCount = Object.values(u.checks || {}).filter(Boolean).length;

        return `
          <tr>
            <td>
              <div class="student-cell">
                <img class="student-avatar" src="${u.photo || defaultAvatar}" alt="Avatar">
                <div class="student-info">
                  <b>${escapeHTML(u.name)}</b>
                  <small>${escapeHTML(u.email)}</small>
                </div>
              </div>
            </td>
            <td>
              <span class="status-badge ${isBlocked ? 'blocked' : 'active'}">
                ${isBlocked ? '🚫 Bloqueado' : u.isAnonymous ? 'Visitante (sem login)' : '🟢 Ativo (Liberado)'}
              </span>
            </td>
            <td>
              <span style="font-size:0.85rem; color:var(--ink);">${formatDate(u.lastUpdated)}</span>
            </td>
            <td>
              <div><b>${u.answered}</b> questões</div>
              <small class="rate-badge ${rateClass}">${rate}% de acertos (${u.correct} certos)</small>
            </td>
            <td>
              <div>${wordCount > 0 ? `<b>${wordCount}</b> palavras` : '<span style="color:var(--muted);">Não iniciada</span>'}</div>
              <small style="color:var(--muted);">${checkedCount}/4 tópicos ${(u.essayHistory && u.essayHistory.length) ? `· <b style="color:var(--blue);">${u.essayHistory.length} versão(ões)</b>` : ''}</small>
            </td>
            <td>
              <span style="font-weight:700; color:${socioDone ? '#15803d' : '#94a3b8'};">
                ${socioDone ? '✅ Concluído' : '⏳ Pendente'}
              </span>
            </td>
            <td>
              <div class="action-buttons">
                <button class="btn-sm ${isBlocked ? 'btn-unblock' : 'btn-block'}" onclick="window.toggleUserStatus('${u.id}', '${isBlocked ? 'active' : 'blocked'}')">
                  ${isBlocked ? 'Liberar Acesso' : 'Bloquear'}
                </button>
                <button class="btn-sm" onclick="window.openDetailModal('${u.id}')">
                  Detalhes
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }

    // Ação: Alternar Status de Acesso do Estudante (Bloquear / Liberar)
    window.toggleUserStatus = async function (userId, newStatus) {
      try {
        const student = allStudents.find(u => u.id === userId);
        const actionText = newStatus === "blocked" ? "bloquear" : "liberar";
        if (!confirm(`Deseja realmente ${actionText} o acesso de ${student ? student.name : 'este usuário'}?`)) return;

        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, { status: newStatus }, { merge: true });

        if (student) student.status = newStatus;
        renderKPIs();
        renderTable();

        toast(newStatus === "blocked" ? "Acesso do estudante bloqueado com sucesso!" : "Acesso liberado com sucesso!");
      } catch (err) {
        console.error("Erro ao alterar status:", err);
        toast("Erro ao alterar status: " + err.message);
      }
    };

    // Renderizador do conteúdo do modal de detalhes (para abertura e atualização em tempo real)
    function renderDetailModalContent(userId) {
      const u = allStudents.find(x => x.id === userId);
      if (!u) {
        window.closeDetailModal();
        return;
      }

      const isBlocked = u.status === "blocked";
      const wordCount = u.essay ? u.essay.trim().split(/\s+/).filter(Boolean).length : 0;
      const rate = u.answered ? Math.round(u.correct / u.answered * 100) : 0;
      const socioDone = u.completed && u.completed.includes("socio");

      detailModalContainer.innerHTML = `
        <div class="modal-overlay" onclick="if(event.target === this) window.closeDetailModal()">
          <div class="detail-modal">
            <div class="detail-modal-header">
              <div class="student-cell">
                <img class="student-avatar" src="${u.photo || defaultAvatar}" alt="Avatar">
                <div class="student-info">
                  <h3 style="margin:0;">${escapeHTML(u.name)}</h3>
                  <small>${escapeHTML(u.email)} · ID: <code>${u.id}</code></small>
                </div>
              </div>
              <button class="btn light" onclick="window.closeDetailModal()" style="padding:6px 12px; font-size:1.1rem;">&times;</button>
            </div>

            <div class="detail-section">
              <h4>Resumo Pedagógico</h4>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:10px; margin-top:8px;">
                <div style="background:#f8fafc; padding:10px; border-radius:10px; border:1px solid var(--line);">
                  <small style="color:var(--muted);">Questões Feitas</small>
                  <div style="font-size:1.3rem; font-weight:800; color:var(--blue);">${u.answered}</div>
                </div>
                <div style="background:#f8fafc; padding:10px; border-radius:10px; border:1px solid var(--line);">
                  <small style="color:var(--muted);">Taxa de Acertos</small>
                  <div style="font-size:1.3rem; font-weight:800; color:${rate >= 60 ? '#15803d' : '#b52e3b'};">${rate}% (${u.correct} certos)</div>
                </div>
                <div style="background:#f8fafc; padding:10px; border-radius:10px; border:1px solid var(--line);">
                  <small style="color:var(--muted);">Socioemocional</small>
                  <div style="font-size:1.1rem; font-weight:800; color:${socioDone ? '#15803d' : '#94a3b8'}; margin-top:2px;">
                    ${socioDone ? '✅ Concluído' : '⏳ Pendente'}
                  </div>
                </div>
                <div style="background:#f8fafc; padding:10px; border-radius:10px; border:1px solid var(--line);">
                  <small style="color:var(--muted);">Último Acesso</small>
                  <div style="font-size:0.95rem; font-weight:700; color:var(--ink); margin-top:4px;">${formatDate(u.lastUpdated)}</div>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <h4>Controle de Acesso</h4>
              <div style="display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:12px 16px; border-radius:12px; border:1px solid var(--line);">
                <div>
                  Status Atual: <span class="status-badge ${isBlocked ? 'blocked' : 'active'}">${isBlocked ? '🚫 Bloqueado' : '🟢 Ativo (Liberado)'}</span>
                </div>
                <button class="btn-sm ${isBlocked ? 'btn-unblock' : 'btn-block'}" onclick="window.toggleUserStatus('${u.id}', '${isBlocked ? 'active' : 'blocked'}');">
                  ${isBlocked ? 'Desbloquear Aluno' : 'Suspender Aluno'}
                </button>
              </div>
            </div>

            <div class="detail-section">
              <h4>Produção Textual Atual · ${wordCount} palavras</h4>
              ${u.essay ? `<div class="essay-preview">${escapeHTML(u.essay)}</div>` : '<p style="color:var(--muted);">Nenhuma redação ativa no momento.</p>'}
            </div>

            ${(u.essayHistory && u.essayHistory.length) ? `
              <div class="detail-section">
                <h4>Histórico de Redações & Ideias (${u.essayHistory.length} versões registradas)</h4>
                <div style="display:flex; flex-direction:column; gap:10px; max-height:280px; overflow-y:auto; padding-right:4px;">
                  ${u.essayHistory.map((h, idx) => `
                    <div style="background:#f8fafc; border:1px solid var(--line); border-radius:10px; padding:12px;">
                      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
                        <b>${escapeHTML(h.prompt || 'Proposta Geral')}</b>
                        <small style="color:var(--muted);">${h.dateFormatted || formatDate(h.timestamp)} · <b>${h.wordCount || 0} palavras</b></small>
                      </div>
                      <div style="font-size:0.86rem; color:var(--ink); white-space:pre-wrap; max-height:100px; overflow-y:auto; background:#fff; padding:10px; border-radius:8px; border:1px solid #e2e8f0; line-height:1.5;">${escapeHTML(h.text)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="detail-section">
              <h4>Caderno de Erros Recentes (${u.errors.length} registrados)</h4>
              ${u.errors.length ? u.errors.slice(0, 10).map((e, idx) => `
                <div class="error-item">
                  <b>${idx + 1}. [${escapeHTML(e.subject || 'Geral')} - ${escapeHTML(e.topic || 'Tópico')} ]</b> ${escapeHTML(e.question)}<br>
                  <span style="color:#b52e3b;">Marcou: ${escapeHTML(e.chosen)}</span> | <span style="color:#13784d;">Correta: ${escapeHTML(e.correct)}</span>
                </div>
              `).join('') : '<p style="color:var(--muted);">Nenhum erro registrado.</p>'}
            </div>

            <div style="text-align:right; margin-top:20px;">
              <button class="btn" onclick="window.closeDetailModal()">Fechar</button>
            </div>
          </div>
        </div>
      `;
    }

    // Modal de Detalhes Pedagógicos do Estudante
    window.openDetailModal = function (userId) {
      currentModalUserId = userId;
      renderDetailModalContent(userId);
    };

    window.closeDetailModal = function () {
      currentModalUserId = null;
      detailModalContainer.innerHTML = "";
    };

    // Eventos de Filtro e Busca
    searchInput.addEventListener("input", renderTable);
    statusFilter.addEventListener("change", renderTable);
    sortBy.addEventListener("change", renderTable);
    refreshBtn.addEventListener("click", () => {
      startRealtimeListener();
      toast("Lista sincronizada em tempo real!");
    });

    // Botão de Login da Barreira
    gateLoginBtn.addEventListener("click", async () => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      } catch (err) {
        console.error("Erro no login:", err);
      }
    });

    // Logout
    adminLogoutBtn.addEventListener("click", async () => {
      if (unsubscribeRealtime) unsubscribeRealtime();
      await signOut(auth);
      location.reload();
    });

  } catch (err) {
    console.error("Falha ao inicializar painel:", err);
    loadingState.innerHTML = `<h3 style="color:var(--red);">Erro ao iniciar painel administrativo</h3><p>${err.message}</p>`;
  }
})();
