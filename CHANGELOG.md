# Changelog

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
