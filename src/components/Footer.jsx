import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto; /* Faz o footer empurrar o conteúdo para cima */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  color: #ff5733;
  cursor: pointer;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #ff5733;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff784e;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 5rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <LogoContainer>
        <Logo onClick={() => navigate("/")}>FIAP NEWS</Logo>
        <AddButton onClick={() => navigate("/adicionar-noticia")}>+</AddButton>
      </LogoContainer>
      <LinksContainer>
        <FooterLink href="https://www.fiap.com.br/institucional/#conceito">Sobre</FooterLink>
        <FooterLink href="https://www.fiap.com.br/fale-conosco/">Contato</FooterLink>
        <FooterLink href="https://www.fiap.com.br/privacidade/">Política de Privacidade</FooterLink>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
