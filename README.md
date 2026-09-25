# Intensivo para SESI-RS

Biblioteca de estudos e treinamento intensivo de dois dias para o Processo Seletivo do Ensino Médio SESI-RS de 27/09/2026.

## Objetivo

Maximizar o desempenho nos conteúdos do edital, com foco no mínimo de 50% em Matemática, Língua Portuguesa e Produção Textual, além de preparação prática para a etapa socioemocional.

## Público-alvo

Estudantes concluintes do 9º ano do Ensino Fundamental prestando o exame de admissão.

---

## Stack e Arquitetura

- **Frontend:** HTML5, CSS3 moderno e JavaScript puro (ES6+), sem dependências de build ou bundlers.
- **Arquitetura Local-First:** O app funciona 100% offline e sem login, gravando dados no `localStorage`.
- **Autenticação & Sincronização em Nuvem (Opcional):**
  - **Google Sign-In:** Autenticação via Firebase Auth (popup OAuth oficial).
  - **Cloud Firestore:** Sincronização automática do progresso, acertos, histórico de erros, rascunho de redação e simulação socioemocional.
  - **Fusão Inteligente (Merge):** O estudante pode começar a estudar anonimamente; ao fazer login com o Google, seu progresso local é mesclado com a sua conta na nuvem sem perda de dados.
- **Painel Administrativo & Controle de Acesso:** Dashboard exclusivo para administradores com métricas de desempenho e controle de suspensão/liberação de acesso.

---

## Como Executar Localmente

1. Abra diretamente o arquivo `dist/index.html` em qualquer navegador moderno, ou
2. Inicie um servidor HTTP local simples:
   ```bash
   # Com Python:
   python -m http.server 8000 --directory dist
   
   # Ou com Node:
   npx serve dist
   ```
3. Acesse `http://localhost:8000`.

---

## Painel de Controle de Acesso (Administrador)

A plataforma conta com um dashboard administrativo completo localizado em [`dist/admin.html`](file:///C:/Users/Kleber/.gemini/antigravity/scratch/intensivo-para-sesi-rs/dist/admin.html).

### Recursos do Painel:
- **Métricas Globais:** Total de estudantes, alunos ativos, alunos bloqueados, total de questões resolvidas e média geral de acertos.
- **Controle de Acesso em Tempo Real:** Botão para **Bloquear** ou **Liberar** o acesso de qualquer estudante com 1 clique.
- **Busca e Filtros:** Pesquisa instantânea por nome ou e-mail, filtros por status e ordenação por data de acesso ou rendimento.
- **Acompanhamento Pedagógico Individual:** Visualização detalhada dos erros recentes e do texto da redação de cada aluno.
- **Atalho Automático:** Quando um e-mail de administrador (configurado em `ADMIN_EMAILS`) faz login no app, um botão **"⚙️ Painel Admin"** aparece na barra superior.

---

## Como Configurar o Login com Google e Salvamento na Nuvem

Para compartilhar o projeto com múltiplos estudantes e permitir que cada um salve seu progresso na sua própria conta Google:

### 1. Criar o Projeto no Firebase (100% Gratuito)
1. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um projeto (ex.: `intensivo-sesi-rs-2026`).

### 2. Ativar a Autenticação com Google
1. No menu lateral, acesse **Build > Authentication**.
2. Clique em **Vamos começar** e selecione **Google** na lista de provedores.
3. Ative o botão, informe seu e-mail de suporte e clique em **Salvar**.

### 3. Criar o Banco Firestore e Definir Regras de Segurança
1. No menu lateral, acesse **Build > Firestore Database** e clique em **Criar banco de dados**.
2. Cole na aba **Regras** (Rules) o conteúdo de `firestore.rules`:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       function isAdmin() {
         return request.auth != null && (
           request.auth.token.email in ['djkleber@gmail.com']
         );
       }

       match /users/{userId} {
         allow get: if request.auth != null && (request.auth.uid == userId || isAdmin());
         allow list: if isAdmin();
         allow write: if request.auth != null && (
           isAdmin() || 
           (request.auth.uid == userId && (resource == null || resource.data.status != 'blocked'))
         );
       }
     }
   }
   ```

### 4. Configurar as Chaves no Projeto
Copie as credenciais da Web App no Firebase Console para `dist/firebase-config.js`:
```javascript
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "intensivo-sesi-rs-2026.firebaseapp.com",
  projectId: "intensivo-sesi-rs-2026",
  storageBucket: "intensivo-sesi-rs-2026.firebasestorage.app",
  messagingSenderId: "966380159873",
  appId: "1:966380159873:web:..."
};

window.ADMIN_EMAILS = [
  "djkleber@gmail.com"
];
```

---

## Como Publicar e Compartilhar com os Alunos

### Opção A: Firebase Hosting (Recomendada)
Já configurado e em produção:
```bash
firebase deploy --only hosting
```
URL ao vivo: `https://intensivo-sesi-rs-2026.web.app`

### Opção B: GitHub Pages
Configurado via GitHub Actions em `.github/workflows/deploy-pages.yml`. Basta dar `git push origin main`.

---

## Estrutura do Repositório

```text
├── dist/
│   ├── index.html               # Aplicação principal do estudante
│   ├── admin.html               # Dashboard de controle de acesso (Admin)
│   ├── admin.js                 # Lógica de gestão e acompanhamento
│   ├── admin.css                # Estilos do painel de controle
│   ├── styles.css               # Estilos base e temas visuais
│   ├── app.js                   # Conteúdo pedagógico, trilhas e simulados
│   ├── socio.js                 # Módulo socioemocional interativo
│   ├── socio.css                # Estilos do módulo socioemocional
│   ├── auth.js                  # Autenticação Google & Sincronização Firestore
│   ├── firebase-config.js       # Credenciais ativas da aplicação
│   └── firebase-config.example.js # Template de configuração
├── firestore.rules              # Regras de segurança e controle de acesso
├── firebase.json                # Configuração do Firebase Hosting e Firestore
├── CHANGELOG.md                 # Histórico de versões
└── README.md                    # Documentação do projeto
```

---

## Roadmap

- [x] v1.0.0: Trilhas, simulados, caderno de erros, redação e painel de progresso.
- [x] v1.1.0: 60 questões contextualizadas com sorteio sem repetição.
- [x] v1.2.0: Módulo socioemocional narrativo em 3 etapas com 42 situações.
- [x] v1.2.1: Identidade atualizada para Intensivo para SESI-RS.
- [x] v1.3.0: Login com Google via Firebase Auth e sincronização no Cloud Firestore.
- [x] v1.4.0: Dashboard de controle de acesso de usuários, métricas da turma e suspensão/liberação de acesso.

Developed by AK Labs
