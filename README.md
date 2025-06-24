# 🛍️ Painel de Produtos

Uma aplicação moderna em React para exibir uma lista de produtos com suporte a tema claro/escuro, utilizando arquitetura modular, Zustand para gerenciamento de estado e simulação de API com JSON Server.

---

## 🚀 Tecnologias utilizadas

- **React + Vite** — renderização rápida e moderna  
- **TypeScript** — tipagem estática para maior robustez  
- **Styled Components** — CSS-in-JS com suporte a temas  
- **React Query** — gerenciamento de cache e estados de requisições  
- **Zustand** — gerenciamento de estado global leve e intuitivo  
- **JSON Server** — simulação de uma API REST  
- **Axios com interceptors** — requisições HTTP centralizadas e seguras  
- **Recharts** — criação de gráficos e visualizações de dados  
- **Jest + Testing Library** — testes unitários e de componentes com cobertura confiável  
- **Render (onrender.com)** — deploy gratuito da API mockada com JSON Server  
- **Vite** — bundler ultrarrápido para desenvolvimento moderno

---

## :boom: Como rodar o projeto localmente

```bash
# 1. Instale as dependências
npm install

# 3. Rode o projeto em ambiente de desenvolvimento
npm run dev

```

---

## 🧪 API Mock (JSON Server)

Este projeto utiliza uma API simulada com json-server para simular operações de CRUD em produtos.
A API está hospedada gratuitamente no Render e pode ser acessada por:

🔗 Base URL: https://rest-json-server.onrender.com

![image](https://github.com/user-attachments/assets/2ab2f1ca-6068-4647-b2ec-562f3fd5a9a6)

🔹 Endpoints disponíveis:

GET /products — Lista todos os produtos

GET /products/:id — Retorna um produto específico

POST /products — Cria um novo produto

PUT /products/:id — Atualiza um produto

DELETE /products/:id — Remove um produto



