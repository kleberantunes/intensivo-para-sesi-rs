# Changelog

## 1.7.0 — 2026-09-25

- **Super Banco de Questões (340 questões):** 170 questões de Língua Portuguesa e 170 de Matemática, incluindo as 40 questões originais do Caderno Inova Médio 2025 e 300 questões autorais de alta profundidade.
- **5 Alternativas e Gabarito Calibrado:** Todas as 340 questões contam com 5 alternativas (A, B, C, D, E) e resoluções comentadas detalhadas.
- **Simulado Completo Ampliado:** O Simulado Final agora conta com 40 questões balanceadas (20 de Matemática e 20 de Português) e proposta de redação independente.
- **Cache-Busting Global v1.7.0:** Versionamento automático de assets para atualização instantânea em clientes conectados.

## 1.6.0 — 2026-09-25

- **Autenticação Anônima (Visitantes no Painel):** Usuários que praticam sem login agora recebem UID anônimo do Firebase e sincronizam suas respostas com o Firestore, aparecendo no painel administrativo como "Usuário não logado · [ID]".
- **Filtro de Visitantes no Admin:** O dashboard administrativo ganhou filtro dedicado para "Usuários não logados" e "Contas com login".
- **Motor de Fusão e Proteção Anti-Perda (`progress-store.js`):** Arquitetura que impede que estados vazios ou incompletos sobrescrevam o histórico na nuvem; respostas de múltiplos aparelhos ou sessões offline são somadas sem duplicidade.
- **Transição Suave Convidado -> Google:** Ao fazer login com o Google, o histórico anônimo é transferido para a conta Google sem perder acertos ou progresso acumulado.
- **Regras de Segurança Atualizadas (`firestore.rules`):** Regras no Firestore protegem contra redução indevida de pontuação (`answered` e `correct`) e autorizam visitantes e admins de forma segura.

## 1.5.0 — 2026-09-25

- **Alinhamento com a Prova SESI 2025:** Reestruturação pedagógica para o nível real de cobrança do caderno do processo seletivo.
- **Isolamento do Banco (`dist/questions.js`):** Separação dos dados de questões da lógica de navegação do app.

## 1.4.3 — 2026-09-24

- **Ajuste de cache e sincronização:** Headers `no-cache`, botão de sincronização manual e avisos visuais de status.

## 1.4.0 — 2026-09-24

- **Dashboard de Controle de Acesso (`admin.html`):** Painel administrativo exclusivo para gestão de estudantes e controle de permissões.
- **Métricas e KPIs em Tempo Real:** Total de alunos, acessos ativos, alunos suspensos, total de questões resolvidas e taxa média de acerto da turma.
- **Controle de Acesso com 1 Clique:** Capacidade de bloquear ou liberar o acesso de qualquer estudante instantaneamente.
- **Acompanhamento Pedagógico Individual:** Visualização dos detalhes de cada aluno, incluindo histórico do caderno de erros e rascunho da produção textual (redação).
- **Proteção e Segurança:** Regras de segurança no Firestore (`firestore.rules`) garantindo que apenas e-mails autorizados (`ADMIN_EMAILS`) possam listar ou alterar dados de outros usuários.
- **Atalho no App:** Botão "Painel Admin" inserido automaticamente na barra de navegação quando um administrador autentica.

## 1.3.0 — 2026-09-24

- **Autenticação com Google (OAuth):** Integração com Firebase Authentication para login seguro com 1 clique.
- **Sincronização em Nuvem (Cloud Firestore):** Salvamento automático e em tempo real do progresso de questões, simulados, caderno de erros, redação e módulo socioemocional.
- **Arquitetura Local-First Híbrida:** O aplicativo continua funcionando offline via `localStorage` e realiza fusão inteligente (merge) dos dados assim que o usuário conecta com o Google, sem perda de progresso.
- **Interface de Usuário e Feedback:** Botão de login do Google na barra superior, avatar com nome do estudante, indicador de status de sincronização (`Salvo`, `Salvando...`) e opção de logout.
- **Regras de Segurança (`firestore.rules`):** Isolamento estrito de dados por UID para total privacidade entre diferentes estudantes.
- **Documentação de Implantação:** Guia passo a passo para configuração do Firebase e publicação no GitHub Pages, Firebase Hosting e Vercel.

## 1.2.1 — 2026-09-24

- Produto renomeado para Intensivo para SESI-RS.
- Referências pessoais removidas da interface e do conteúdo.
- Migração transparente do progresso salvo para a nova chave do aplicativo.

## 1.2.0 — 2026-09-24

- Novo módulo Avaliação Socioemocional — Treino SESI-RS.
- Simulação completa em três etapas com 18 situações e consequências narrativas.
- Banco inicial com 42 situações, três níveis de dificuldade e classificação por competências.
- Desafio socioemocional de 5 minutos sem repetição entre rodadas.
- Painel educativo de competências e revisão das decisões, sem diagnóstico ou gabarito.

## 1.1.0 — 2026-09-24

- Banco ampliado de 30 para 60 questões contextualizadas.
- Sorteio inteligente que evita repetir perguntas no Desafio de 10 minutos até percorrer o banco disponível.
- Simulados consecutivos também priorizam perguntas ainda não vistas.

## 1.0.0 — 2026-09-24

- Lançamento inicial da plataforma de preparação para o SESI-RS.
- Trilhas orientadas para sexta-feira e sábado.
- Banco de questões, simulados, redação, socioemocional, progresso e caderno de erros.
- Publicação como aplicação web responsiva.

Developed by AK Labs
