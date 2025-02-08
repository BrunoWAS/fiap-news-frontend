import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 50%;
  margin: 20px auto;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h2`
  text-align: center;
  color: #ff5733;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
  resize: none;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #ff5733;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #e04e2e;
  }
`;

const AdicionarNoticia = () => {
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setNoticia({ ...noticia, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noticia.title || !noticia.description || !noticia.content || !noticia.category || !noticia.imageUrl) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/news", noticia);
      alert("Notícia cadastrada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar notícia:", error);
      alert("Erro ao cadastrar a notícia. Tente novamente.");
    }
  };

  return (
    <Container>
      <Titulo>Adicionar Nova Notícia</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Título" value={noticia.title} onChange={handleChange} />
        <Input type="text" name="description" placeholder="Descrição" value={noticia.description} onChange={handleChange} />
        <TextArea name="content" placeholder="Conteúdo da Notícia" value={noticia.content} onChange={handleChange} />
        <Select name="category" value={noticia.category} onChange={handleChange}>
          <option value="">Selecione uma categoria</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Ciência">Ciência</option>
          <option value="Esportes">Esportes</option>
          <option value="Entretenimento">Entretenimento</option>
          <option value="Política">Política</option>
          <option value="Economia">Economia</option>
        </Select>
        <Input type="text" name="imageUrl" placeholder="URL da Imagem" value={noticia.imageUrl} onChange={handleChange} />
        <Button type="submit">Cadastrar Notícia</Button>
      </Form>
    </Container>
  );
};

export default AdicionarNoticia;
