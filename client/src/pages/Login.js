import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLink,
  StyledButton,
} from "../styles";
import api from "../services/api";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`http://localhost:3000/users`)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    const usuario = users.find((user) => user.username === username);

    if (usuario && password === usuario.password) {
      sessionStorage.setItem("id", usuario._id);
      navigate("/");
    } else {
      alert("Password ou username incorretos! Digite de novo.");
    }
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm onSubmit={handleLogin}>
        <h1>Login</h1>
        <StyledInput
          required
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Login</StyledButton>
        <p>Não possui cadastro?</p>
        <StyledLink to="/cadastro">
          <StyledButton>Cadastro</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
