# 📝 Gerenciador de Tarefas com React

Este é um projeto de um Gerenciador de Tarefas (To-Do List) simples e funcional, desenvolvido com React. A aplicação permite aos usuários adicionar, completar, excluir e visualizar detalhes de suas tarefas de forma intuitiva.

[Demonstração do Projeto](https://i.imgur.com/BoPxnxm.mp4)

---

## ✨ Funcionalidades Principais

- **Adicionar Tarefas**: Crie novas tarefas fornecendo um título e uma descrição.
- **Marcar como Concluída**: Clique no título da tarefa para alternar seu estado entre pendente e concluída (com um efeito visual de texto riscado).
- **Excluir Tarefas**: Remova tarefas da lista com um único clique.
- **Visualizar Detalhes**: Navegue para uma página de detalhes para ver a descrição completa de uma tarefa.
- **Persistência de Dados**: As tarefas são salvas no `localStorage` do navegador, garantindo que não sejam perdidas ao recarregar a página.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas do ecossistema front-end:

- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build para um desenvolvimento front-end mais rápido e leve.
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem de programação principal.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização rápida e responsiva.
- **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas e navegação entre páginas.
- **[UUID](https://github.com/uuidjs/uuid)**: Para a geração de identificadores únicos para cada tarefa.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones SVG simples.

---

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se estiver usando Yarn:*
    ```bash
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    *ou, com Yarn:*
    ```bash
    yarn dev
    ```

5.  **Abra no navegador:**
    A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada no seu terminal).

---

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte maneira:

```
/src
|-- /components
|   |-- AddTasks.jsx     # Formulário para adicionar novas tarefas
|   |-- Tasks.jsx        # Componente que renderiza a lista de tarefas
|
|-- App.jsx              # Componente principal que gerencia o estado e a lógica
|-- main.jsx             # Ponto de entrada da aplicação
```

- **`App.jsx`**: É o coração da aplicação. Ele gerencia o estado `tasks` e contém as funções principais (`addTask`, `onTaskClick`, `deleteTask`).
- **`AddTasks.jsx`**: Um componente de formulário que captura os dados do usuário e chama a função `addTask` recebida via props.
- **`Tasks.jsx`**: Um componente de lista que recebe as tarefas e as funções de manipulação via props, renderizando cada item da lista com seus respectivos botões.

---

Feito por [Thayroni Lima](https://github.com/Thayroni-Lima).
