import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DestaquesContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 450px;
  margin-bottom: 60px;
`;

const NoticiaPrincipal = styled.div`
  flex: 60%;
  background-color: #222;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const NoticiaTitulo = styled.h2`
  padding: 0 1rem;
  font-size: 1.7rem;
  margin-bottom: 10px;
  text-align: center;
  color: #ff5733;
`;

const NoticiaDescricao = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  padding: 0 1rem;
  text-align: center;
`;

const NoticiasSecundarias = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const NoticiaSecundaria = styled.div`
  flex: 1;
  background-color: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Destaques = ({ noticias }) => {
  const navigate = useNavigate();

  if (noticias.length < 3) return null; // Se não houver notícias suficientes, não renderiza

  return (
    <DestaquesContainer>
      <NoticiaPrincipal onClick={() => navigate(`/noticia/${noticias[0]._id}`)}>
        <NoticiaTitulo>{noticias[0].title}</NoticiaTitulo>
        <NoticiaDescricao>{noticias[0].description}</NoticiaDescricao>
      </NoticiaPrincipal>

      <NoticiasSecundarias>
        {noticias.slice(1, 3).map((noticia) => (
          <NoticiaSecundaria key={noticia._id} onClick={() => navigate(`/noticia/${noticia._id}`)}>
            <h3>{noticia.title}</h3>
          </NoticiaSecundaria>
        ))}
      </NoticiasSecundarias>
    </DestaquesContainer>
  );
};

export default Destaques;
