import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { getNoticias } from "../services/api";

const NoticiaContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  min-height: 100vh; /* Garante que a página tenha no mínimo o tamanho da tela */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
`;

const NoticiaTitulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ff5733;
`;

const NoticiaImagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const NoticiaDescricao = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const NoticiaConteudo = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 20px;
  text-align: justify;
`;

const BotoesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Botao = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  ${(props) =>
    props.tipo === "editar" &&
    `
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  `}

  ${(props) =>
    props.tipo === "deletar" &&
    `
    background-color: #dc3545;
    &:hover {
      background-color: #a71d2a;
    }
  `}
`;

const Noticia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);

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

  const handleDelete = async () => {
    const confirmar = window.confirm("Tem certeza que deseja deletar esta notícia?");
    if (confirmar) {
      try {
        await axios.delete(`http://localhost:5000/news/${id}`);
        alert("Notícia excluída com sucesso!");
        navigate("/");
      } catch (error) {
        console.error("Erro ao deletar notícia:", error);
        alert("Erro ao excluir a notícia. Tente novamente.");
      }
    }
  };

  return (
    <NoticiaContainer>
      {noticia ? (
        <>
          <NoticiaTitulo>{noticia.title}</NoticiaTitulo>
          <NoticiaImagem src={noticia.imageUrl} alt={noticia.title} />
          <NoticiaDescricao>{noticia.description}</NoticiaDescricao>
          <NoticiaConteudo>{noticia.content}</NoticiaConteudo>

          {/* Botões de Ação */}
          <BotoesContainer>
            <Botao tipo="editar" onClick={() => navigate(`/editar-noticia/${id}`)}>
              Editar
            </Botao>
            <Botao tipo="deletar" onClick={handleDelete}>
              Deletar
            </Botao>
          </BotoesContainer>
        </>
      ) : (
        <p>Carregando notícia...</p>
      )}
    </NoticiaContainer>
  );
};

export default Noticia;
