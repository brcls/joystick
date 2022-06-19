import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Biblioteca from "./pages/Biblioteca";
import Explorar from "./pages/Explorar";
import Jogo from "./pages/DetalheJogo";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
