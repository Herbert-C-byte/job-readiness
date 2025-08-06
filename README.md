### 📄 Projeto: **Job-Readiness Checker**

### 🧩 Visão Geral

O **Job-Readiness Checker** é uma aplicação web simples e interativa, desenvolvida com **React** e **TypeScript**, que ajuda os utilizadores a avaliarem o seu grau de prontidão para o mercado de trabalho. A aplicação guia o utilizador por um breve questionário e fornece feedback personalizado com base nas respostas.

Além de sua funcionalidade prática, este projeto foi pensado como uma **atividade educativa**, ideal para quem está a aprender React + TypeScript e deseja consolidar os principais fundamentos do ecossistema.

---

### 🎯 Objetivos de Aprendizagem

Ao concluir este projeto, o desenvolvedor terá colocado em prática os seguintes conceitos essenciais:

1. **JSX** – Criar estruturas de interface em JavaScript com sintaxe semelhante a HTML.
2. **Componentes** – Criar e organizar a aplicação em componentes reutilizáveis.
3. **Props** – Passar dados entre componentes de forma controlada.
4. **Tipos básicos do TypeScript** – Usar `string`, `number`, `boolean`, `array`, `object`, etc.
5. **useState** – Gerir estados locais dentro de componentes funcionais.
6. **Manipulação de eventos** – Lidar com eventos como cliques, submissões de formulário e mudanças de input.
7. **Genéricos do TypeScript** – Criar componentes ou funções reutilizáveis com tipos genéricos.
8. **Renderização condicional** – Mostrar ou esconder elementos com base em condições lógicas.
9. **`.map()`** – Renderizar listas de elementos a partir de arrays.
10. **Chaves (`key`)** – Utilizar `key` corretamente ao renderizar listas para melhorar a performance e evitar erros.
11. **Tailwind CSS "infantil"** – Usar classes utilitárias básicas para estilização rápida e simples.

---

### 🛠️ Tecnologias Utilizadas

- **React** com **TypeScript**
- **Tailwind CSS** (classes básicas apenas)
- **React Hooks** (`useState`)
- Nenhuma biblioteca externa obrigatória (mínimo possível de dependências)

---

### 🧪 Funcionalidades

- **Formulário de autoavaliação**: Um conjunto de perguntas relacionadas à prontidão para o trabalho.
- **Pontuação automática**: Com base nas respostas, o sistema calcula uma pontuação.
- **Feedback personalizado**: Mostra mensagens que ajudam o utilizador a entender como melhorar sua prontidão.
- **Layout responsivo**: Visual simples e adaptável, estilizado com Tailwind básico.

---

### 🗂️ Estrutura Recomendada

```
src/
├── components/
│   ├── QuestionCard.tsx
│   ├── Result.tsx
│   └── Button.tsx
├── types/
│   └── index.ts
├── App.tsx
├── index.tsx
└── styles/
    └── tailwind.css
```

---

### 🗓️ Timeline Sugerido

| Semana | Atividade                                                            |
| ------ | -------------------------------------------------------------------- |
| 1      | Setup do projeto, estrutura de pastas, formulário JSX com `useState` |
| 2      | Lógica de pontuação e feedback, uso de props e tipos                 |
| 3      | Renderização condicional, listas com `.map()` e chaves               |
| 4      | Estilização básica com Tailwind, refatoração e testes manuais        |
"# job-readness" 
