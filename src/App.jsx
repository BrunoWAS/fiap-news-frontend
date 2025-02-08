import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Pesquisa from "./pages/Pesquisa";
import Navbar from "./components/Navbar";
import Noticia from "./pages/Noticia";
import Footer from "./components/Footer";
import AdicionarNoticia from "./pages/AdicionarNoticia";
import EditarNoticia from "./pages/EditarNoticia";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nome" element={<Categoria />} />
        <Route path="/pesquisa/:termo" element={<Pesquisa />} />
        <Route path="/noticia/:id" element={<Noticia />} />
        <Route path="/adicionar-noticia" element={<AdicionarNoticia />} />
        <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
