import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getNoticias } from "../services/api";
import Destaques from "../components/Destaques";

const HomeContainer = styled.div`
  width: 60%;
  margin: 20px auto;
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

const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNoticias = async () => {
      setLoading(true);
      try {
        const data = await getNoticias();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
      setLoading(false);
    };

    fetchNoticias();
  }, []);

  return (
    <HomeContainer>
      {loading ? (
        <>
          <Skeleton height={450} />
          <Skeleton count={5} height={80} style={{ marginBottom: "10px" }} />
        </>
      ) : noticias.length > 0 ? (
        <>
          <Destaques noticias={noticias} />
          <ListaNoticias>
            {noticias.slice(3).map((noticia) => (
              <NoticiaItem key={noticia._id} onClick={() => navigate(`/noticia/${noticia._id}`)}>
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
              </NoticiaItem>
            ))}
          </ListaNoticias>
        </>
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </HomeContainer>
  );
};

export default Home;
