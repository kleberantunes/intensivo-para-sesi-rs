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

## Como Configurar o Login com Google e Salvamento na Nuvem

Para compartilhar o projeto com múltiplos estudantes e permitir que cada um salve seu progresso na sua própria conta Google:

### 1. Criar o Projeto no Firebase (100% Gratuito)
1. Acesse o [Firebase Console](https://console.firebase.google.com/) e clique em **Adicionar projeto**.
2. Dê um nome ao projeto (ex.: `intensivo-sesi-rs`) e confirme.

### 2. Ativar a Autenticação com Google
1. No menu lateral, acesse **Build > Authentication**.
2. Clique em **Vamos começar** e selecione **Google** na lista de provedores.
3. Ative o botão, informe seu e-mail de suporte e clique em **Salvar**.

### 3. Criar o Banco Firestore e Definir Regras de Segurança
1. No menu lateral, acesse **Build > Firestore Database** e clique em **Criar banco de dados**.
2. Escolha a localização geográfica mais próxima (ex.: `southamerica-east1` ou `us-central1`).
3. Vá na aba **Regras** (Rules) do Firestore e cole as regras de `firestore.rules`:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
   *Essas regras garantem que cada estudante só pode ler e gravar o seu próprio progresso.*

### 4. Configurar as Chaves no Projeto
1. Na página inicial do projeto no Firebase Console, clique no ícone **Web** (`</>`) para registrar uma aplicação web.
2. Copie o objeto `firebaseConfig` exibido.
3. Abra `dist/firebase-config.js` (ou copie de `dist/firebase-config.example.js`) e cole seus dados:
   ```javascript
   window.FIREBASE_CONFIG = {
     apiKey: "AIzaSy...",
     authDomain: "seu-projeto.firebaseapp.com",
     projectId: "seu-projeto",
     storageBucket: "seu-projeto.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:..."
   };
   ```

---

## Como Publicar e Compartilhar com os Alunos

Como a pasta `dist` é puramente estática, você pode publicá-la gratuitamente em qualquer um dos serviços abaixo:

### Opção A: GitHub Pages (Mais Rápido)
1. Vá nas **Settings** do repositório no GitHub.
2. Em **Pages**, em *Source*, escolha a branch `main` e a pasta `/dist` (ou crie um workflow para publicar a pasta `dist`).
3. Adicione o domínio gerado (ex.: `https://kleberantunes.github.io/intensivo-para-sesi-rs`) na lista de **Domínios autorizados** no Firebase Console (*Authentication > Settings > Authorized domains*).

### Opção B: Firebase Hosting
1. Instale o Firebase CLI: `npm install -g firebase-tools`
2. No terminal da pasta do projeto:
   ```bash
   firebase login
   firebase init hosting   # escolha a pasta 'dist' como diretório público
   firebase deploy
   ```

### Opção C: Vercel / Netlify / Cloudflare Pages
Basta apontar para o repositório GitHub e configurar o diretório de publicação (Publish directory / Root) como `dist`.

---

## Estrutura do Repositório

```text
├── dist/
│   ├── index.html               # Ponto de entrada da aplicação
│   ├── styles.css               # Estilos responsivos e tema visual
│   ├── app.js                   # Lógica pedagógica, rotas, questões e estado
│   ├── socio.js                 # Módulo narrativo socioemocional
│   ├── socio.css                # Estilos do módulo socioemocional
│   ├── auth.js                  # Integração Google Auth & Sincronização Firestore
│   ├── firebase-config.js       # Credenciais do Firebase da aplicação
│   └── firebase-config.example.js # Template de configuração
├── firestore.rules              # Regras de segurança para isolamento por usuário
├── CHANGELOG.md                 # Histórico de versões
└── README.md                    # Documentação do projeto
```

---

## Roadmap

- [x] v1.0.0: Trilhas, simulados, caderno de erros, redação e painel de progresso.
- [x] v1.1.0: 60 questões contextualizadas com sorteio sem repetição.
- [x] v1.2.0: Módulo socioemocional narrativo em 3 etapas com 42 situações.
- [x] v1.2.1: Identidade atualizada para Intensivo para SESI-RS.
- [x] v1.3.0: Login com Google via Firebase Auth e sincronização de progresso no Cloud Firestore entre dispositivos.

Developed by AK Labs
