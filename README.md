# 📰 FIAP News - Frontend

Este repositório contém o **frontend do FIAP News**, um portal de notícias moderno desenvolvido com **React.js**. Ele permite visualizar, pesquisar, adicionar, editar e excluir notícias. 

---

## **📌 Como Rodar o Projeto no Seu Computador**

### **1️⃣ Clonar o Repositório**
Abra o terminal e execute:
```bash
git clone https://github.com/SEU-USUARIO/fiap-news-frontend.git
cd fiap-news-frontend
```

### **2️⃣ Instalar Dependências**
Instale todas as dependências do projeto:
```bash
npm install
```

### **3️⃣ Configurar o Backend**
Este projeto **se comunica com um backend Node.js**. Para que tudo funcione corretamente, você precisa rodar o backend **localmente** ou apontar para um **servidor online**.

Por padrão, o frontend está configurado para se conectar ao backend em **http://localhost:5000**. Se o backend estiver rodando em outro endereço, edite o arquivo `src/services/api.js` e atualize a `baseURL`.

### **4️⃣ Iniciar o Servidor de Desenvolvimento**
Agora, rode o frontend:
```bash
npm start
```
Após rodar esse comando, o projeto estará acessível em **http://localhost:3000/**.

---

## **🛠 Tecnologias Utilizadas**
- **React.js** ⚛️
- **Styled Components** 🎨
- **React Router DOM** 🛣
- **Axios** 📨
- **React Skeleton Loader** ⏳
- **React Infinite Scroll Component** 🔄
