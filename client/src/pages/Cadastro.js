import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import api from "../services/api";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLink,
  StyledButton,
} from "../styles";

export default function Cadastro() {
  const [nome, setNome] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  function handleNovoUsuario(e) {
    e.preventDefault();

    const data = {
      nome,
      username,
      email,
      senha,
      idJogosUser: [],
      cart: [],
    };

    api
      .post("http://localhost:3000/usuarios", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm onSubmit={handleNovoUsuario}>
        <h1>Cadastro</h1>
        <StyledInput
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <StyledInput
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <StyledButton type="submit">Cadastro</StyledButton>
        <p>Já possui cadastro?</p>
        <StyledLink to="/login">
          <StyledButton>Login</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
