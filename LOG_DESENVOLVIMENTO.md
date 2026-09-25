# Registro Histórico de Desenvolvimento & Alterações (Log Geral)
**Projeto:** Intensivo para SESI-RS 2026  
**URL de Produção:** https://intensivo-sesi-rs-2026.web.app  
**Painel Administrativo:** https://intensivo-sesi-rs-2026.web.app/admin.html  
**Repositório:** https://github.com/kleberantunes/intensivo-para-sesi-rs  
**Desenvolvido por:** AK Labs  

---

## 📌 Diretriz de Registro Contínuo
> **Regra Obrigatória:** Toda alteração técnica, funcional ou visual no código ou infraestrutura deve ser registrada neste log, no `CHANGELOG.md` e obrigatoriamente reportada ao usuário na resposta da conversa como um Changelog explícito.

---

## 🕒 Linha do Tempo e Histórico Completo de Alterações

### [v1.7.2] — 25/09/2026
#### 1. Inclusão Automática e Instantânea no Primeiro Login Google
- **Zero Ação Prévia Exigida:** Qualquer novo estudante que entrar no site e clicar em "Entrar com Google" tem sua conta criada de forma totalmente automática no Firestore e aparece instantaneamente no Painel do Administrador em tempo real.
- **Causa Raiz Resolvida:** O código anterior tentava consultar um documento de pré-cadastro em `users/student_...` durante a transação de login do aluno; as regras de segurança do Firestore rejeitavam a leitura porque o UID do documento pertencia a outro identificador (`isOwner(uid)` falhava com `permission-denied`), impedindo a criação do documento do novo aluno.
- **Transação Limpa & Direta:** O método `commit` agora grava diretamente em `users/{identity.uid}` com `status: 'active'`, herdando dados de nome, e-mail e foto do Google sem bloqueios.
- **Preservação de Progresso Local:** Qualquer questão ou simulado feito pelo estudante antes de clicar em "Entrar" é transferido e fundido imediatamente na conta Google recém-conectada.
- **Versionamento Global:** Elevado para `v1.7.2` em todos os pontos com headers `no-cache` para atualização imediata.

### [v1.7.1] — 25/09/2026
#### 1. Cadastro e Adição de Novos Estudantes pelo Painel Admin
- **Botão `➕ Adicionar Estudante`:** Integrado ao header do painel administrativo com modal interativo.
- **Campos Obrigatórios:** Nome do Aluno, E-mail Google (Gmail) e Status Inicial (Ativo/Liberado ou Bloqueado).
- **Pré-Cadastro Transparente:** O documento do aluno é salvo no Firestore com identificador `student_[email]`. Quando o aluno fizer login pela primeira vez com o Google, o `auth.js` detecta o pré-cadastro, herda as permissões e migra para o UID oficial sem qualquer atrito.
- **Ação de Exclusão (`🗑️`):** Permite ao administrador remover estudantes de teste ou visitantes inativos com confirmação segura de exclusão no Firestore.
- **Status Visual Aprimorado:** Novo badge `⏳ Aguardando Acesso` na tabela para indicar estudantes cadastrados que ainda não realizaram o primeiro login.
- **Firestore Rules:** Simplificação da regra `isAdmin()` para dispensar checagem estrita de `email_verified`, prevenindo falhas de permissão.

### [v1.7.0] — 25/09/2026
#### 1. Super Banco de 340 Questões no Padrão Oficial SESI/SENAI
- **Expansão Massiva:** Criação e integração do banco isolado em `dist/questions.js` totalizando 340 questões (170 de Língua Portuguesa e 170 de Matemática).
- **5 Alternativas Padronizadas:** Todas as questões padronizadas de A a E, com gabarito revisado e explicações pedagógicas passo a passo.
- **Caderno Oficial 2025 (40 Questões):** Simulado espelho da prova de gratuidade Inova Médio (20 Português + 20 Matemática).
- **Simulado Final Dinâmico:** Sorteio balanceado de 40 questões com cronômetro, diagnóstico de nota de corte (50%) e gabarito comentado ao término.

#### 2. Autenticação Anônima & Proteção Anti-Perda (`progress-store.js`)
- **Salvamento Imediato de Visitantes:** Estudantes que utilizam sem fazer login recebem um UID anônimo no Firebase e salvam suas respostas diretamente no Firestore.
- **Motor de Fusão Idempotente:** Algoritmo matemático no `progress-store.js` que une tentativas sem permitir decréscimo de pontuação (`answered` e `correct`), impedindo que limpar cache ou navegar offline zere dados no servidor.
- **Migração Convidado -> Google:** Ao clicar em "Entrar com Google", o UID anônimo é vinculado à conta Google ou tem seus dados mesclados automaticamente, preservando todo o progresso do aluno.

#### 3. Regras de Segurança Avançadas (`firestore.rules`)
- Validação estrita para impedir regressão de acertos e respostas: `request.resource.data.answered >= resource.data.answered`.
- Regras permissivas seguras para status default ativo, evitando bloqueios indevidos quando documentos novos são criados sem campo prévio.
- Restrição de listagem de usuários e alteração de status restrita estritamente ao admin (`djkleber@gmail.com`).

---

### [v1.6.0 & v1.5.0] — 25/09/2026
#### 1. Correção Crítica de Sincronização de Estudantes (Caso Isabele)
- **Diagnóstico da Causa Raiz:** Alunos novos não tinham o campo `status` no Firestore; a regra anterior de segurança falhava na verificação e bloqueava silenciosamente o envio de dados.
- **Correção da Regra e Backfill:** Atualização das regras com `!('status' in resource.data) || resource.data.status != 'blocked'` e atualização cadastral dos usuários via API.
- **Fila em Memória:** Implementação de fila com `pendingStateToSave` no `auth.js` garantindo que ações tomadas antes do carregamento completo do Firebase não sejam perdidas.
- **Descarregamento Seguro:** Disparo de gravação nos eventos `beforeunload`, `pagehide` e `visibilitychange`.

#### 2. Histórico de Redações & Ideias (Evolução Textual)
- **Salvamento Manual com Feedback:** Adicionado botão explícito `💾 Salvar Redação` com indicador visual, confirmação de horário e toast no app.
- **Versões e Ideias Salvas:** Criação da estrutura `essayHistory`, permitindo que o aluno salve diferentes versões do seu texto com data, tema, contagem de palavras e estrutura de parágrafos.
- **Recuperação e Exclusão:** Interface para ler rascunhos anteriores, restaurar no editor (`✏️ Carregar no Editor`) ou remover versões indesejadas.
- **Botão Novo Texto:** Botão `➕ Novo Texto (Limpar)` que arquiva o texto atual no histórico antes de limpar o editor.

#### 3. Painel Administrativo em Tempo Real (`admin.html` e `admin.js`)
- **Escuta em Tempo Real (Live Listener):** Substituição de chamadas estáticas por `onSnapshot` do Firestore, refletindo respostas e acessos dos alunos no painel sem necessidade de F5.
- **Acompanhamento de Redações no Admin:** Coluna dedicada informando a quantidade de versões arquivadas pelo aluno.
- **Modal de Detalhes Completo:** Visualização em tempo real do rascunho atual, do histórico completo de redações salvas e dos erros recentes cometidos em simulados.
- **Filtro de Usuários:** Segmentação entre contas registradas com Google e alunos visitantes não logados.

---

### [v1.4.0 a v1.4.3] — 24/09/2026
- **Painel Administrativo v1:** Criação da página `admin.html` com KPIs de turma (Total de alunos, ativos, suspensos, total de questões e taxa geral).
- **Controle de Acesso em 1 Clique:** Mecanismo para suspender ou reativar o acesso de qualquer estudante no sistema.
- **Ajustes de Cache:** Configuração de headers HTTP `no-cache`, `no-store` no `firebase.json` e sufixo de versionamento `?v=...` em todos os scripts e CSS para evitar retenção de cache antigo em navegadores mobile.

---

### [v1.0.0 a v1.3.0] — 24/09/2026
- **Fundação da Plataforma:** Arquitetura Single Page Application (HTML5, Vanilla JS, CSS responsivo moderno).
- **Módulo Socioemocional:** 42 cenários simulados de tomada de decisão, autogestão e convivência no formato específico cobrado pelo SESI-RS.
- **Integração Inicial Firebase:** Configuração de Authentication via Google Popup e Cloud Firestore com isolamento de dados por usuário.
- **Trilhas de Estudo:** Cronograma intensivo de dois dias focado nas habilidades de maior incidência.
