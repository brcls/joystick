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
  const [senha, setSenha] = useState();
  const [usuarios, setUsuarios] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios`)
      .then(({ data }) => {
        setUsuarios(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    const usuario = usuarios.find((user) => user.username === username);

    if (usuario && senha === usuario.senha) {
      localStorage.setItem("id", usuario.id);
      navigate("/");
    } else {
      alert("Senha ou username incorretos! Digite de novo.");
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
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
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
