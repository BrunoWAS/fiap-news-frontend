import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #222;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  color: #ff5733;
  font-size: 1.5rem;
  text-align: center;
  flex: 1;
  margin: 0;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff784e;
  }
`;

const SearchBar = styled.input`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  width: 200px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-300px")};
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  padding: 20px;
  transition: left 0.3s ease-in-out;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  padding: 10px 0;
  font-size: 1.2rem;
  cursor: pointer;
  border-bottom: 1px solid #444;

  &:hover {
    color: #ff5733;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const navigate = useNavigate();

  const handleMouseLeave = () => {
    setTimeout(() => setMenuOpen(false), 500);
  };

  const handleCategoryClick = (categoria) => {
    navigate(`/categoria/${categoria}`);
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && termoPesquisa.trim() !== "") {
      navigate(`/pesquisa/${termoPesquisa}`);
    }
  };

  return (
    <>
      <NavbarContainer>
        <MenuButton onClick={() => setMenuOpen(true)}>☰</MenuButton>
        <LogoButton onClick={() => navigate("/")}>FIAP NEWS</LogoButton>
        <SearchBar
          type="text"
          placeholder="Pesquisar..."
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          onKeyDown={handleSearch}
        />
      </NavbarContainer>

      <Sidebar open={menuOpen} onMouseLeave={handleMouseLeave}>
        <SidebarTitle>Categorias</SidebarTitle>
        <CategoryList>
          <CategoryItem onClick={() => handleCategoryClick("Tecnologia")}>Tecnologia</CategoryItem>
          <CategoryItem onClick={() => handleCategoryClick("Ciência")}>Ciência</CategoryItem>
          <CategoryItem onClick={() => handleCategoryClick("Esportes")}>Esportes</CategoryItem>
          <CategoryItem onClick={() => handleCategoryClick("Entretenimento")}>Entretenimento</CategoryItem>
          <CategoryItem onClick={() => handleCategoryClick("Política")}>Política</CategoryItem>
          <CategoryItem onClick={() => handleCategoryClick("Economia")}>Economia</CategoryItem>
        </CategoryList>
      </Sidebar>
    </>
  );
};

export default Navbar;
