import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Biblioteca from "./pages/Biblioteca";
import Explorar from "./pages/Explorar";
import Jogo from "./pages/DetalheJogo";
import api from "./services/api";

function Rotas() {
  const [token, setToken] = useState();
  const [serverToken, setServerToken] = useState();

  function authenticated() {
    setToken(localStorage.getItem("Token"));

    api
      .get("http://localhost:3000/token")
      .then(({ data }) => {
        setServerToken(data);
      })
      .catch((error) => {
        alert(error);
      });

    console.log(serverToken);

    if (serverToken.token === token) return true;
    else return false;
  }

  function requireAuth(nextState, replace, next) {
    console.log("oi");

    if (!authenticated()) {
      replace({
        pathname: "/login",
        state: { nextPathname: nextState.location.pathname },
      });
    }
    next();
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/perfil" element={<Perfil />} onEnter={requireAuth} />
        <Route path="/carrinho" element={<Carrinho />} onEnter={requireAuth} />
        <Route
          path="/biblioteca"
          element={<Biblioteca />}
          onEnter={requireAuth}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
