import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getNoticias } from "../services/api";

const PesquisaContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  min-height: 100vh; /* Garante que a página tenha no mínimo o tamanho da tela */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
`;

const ListaNoticias = styled.div`
  margin-top: 0px;
`;

const NoticiaItem = styled.div`
  background-color: #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

const NoticiaTextoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pesquisa = () => {
  const { termo } = useParams();
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const data = await getNoticias();
        const noticiasFiltradas = data.filter(
          (noticia) =>
            noticia.title.toLowerCase().includes(termo.toLowerCase()) ||
            noticia.description.toLowerCase().includes(termo.toLowerCase())
        );
        setNoticias(noticiasFiltradas);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, [termo]);

  return (
    <PesquisaContainer>
      <h2>Resultados para: "{termo}"</h2>
      {noticias.length > 0 ? (
        <ListaNoticias>
          {noticias.map((noticia) => (
            <NoticiaItem key={noticia._id} onClick={() => navigate(`/noticia/${noticia._id}`)}>
              <img src={noticia.imageUrl} alt={noticia.title} width="100px" />
              <NoticiaTextoItem>
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
              </NoticiaTextoItem>
            </NoticiaItem>
          ))}
        </ListaNoticias>
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </PesquisaContainer>
  );
};

export default Pesquisa;
