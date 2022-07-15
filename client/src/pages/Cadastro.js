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
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleNovoUsuario(e) {
    e.preventDefault();

    const data = {
      name,
      username,
      email,
      password,
      games: [],
      isAdmin: false,
    };

    api
      .post("http://localhost:3000/users", data)
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
          required
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          required
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
