import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { getNoticias } from "../services/api";

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
  color: #007bff;
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
  background: #007bff;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #0056b3;
  }
`;

const EditarNoticia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const data = await getNoticias();
        const noticiaSelecionada = data.find((noticia) => noticia._id === id);
        setNoticia(noticiaSelecionada);
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
      }
    };

    fetchNoticia();
  }, [id]);

  const handleChange = (e) => {
    setNoticia({ ...noticia, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/news/${id}`, noticia);
      alert("Notícia editada com sucesso!");
      navigate(`/noticia/${id}`);
    } catch (error) {
      console.error("Erro ao editar notícia:", error);
      alert("Erro ao atualizar a notícia. Tente novamente.");
    }
  };

  return (
    <Container>
      <Titulo>Editar Notícia</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="title" value={noticia.title} onChange={handleChange} placeholder="Título" />
        <Input type="text" name="description" value={noticia.description} onChange={handleChange} placeholder="Descrição" />
        <TextArea name="content" value={noticia.content} onChange={handleChange} placeholder="Conteúdo" />
        <Select name="category" value={noticia.category} onChange={handleChange}>
          <option value="">Selecione uma categoria</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Ciência">Ciência</option>
          <option value="Esportes">Esportes</option>
          <option value="Entretenimento">Entretenimento</option>
          <option value="Política">Política</option>
          <option value="Economia">Economia</option>
        </Select>
        <Input type="text" name="imageUrl" value={noticia.imageUrl} onChange={handleChange} placeholder="URL da Imagem" />
        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
};

export default EditarNoticia;
