import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledInput,
  StyledContainer,
  StyledForm,
  StyledProfileImg,
  StyledLink,
  StyledButton,
} from "../styles";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import ImgPerfil from "../assets/perfil.jpg";

export default function Perfil() {
  const { id } = useParams();
  const [nome, setNome] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/${id}`)
      .then(({ data }) => {
        setNome(data.nome);
        setUsername(data.username);
        setEmail(data.email);
        setSenha(data.senha);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleAtualizarUser(e) {
    e.preventDefault();

    const data = {
      nome,
      username,
      email,
      senha,
    };

    api
      .put(`http://localhost:3000/usuarios/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleSair(e) {
    e.preventDefault();

    localStorage.removeItem("id");
    navigate("/");
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm onSubmit={handleAtualizarUser}>
        <h1>Perfil</h1>
        <StyledProfileImg src={ImgPerfil} alt="foto de perfil" />
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
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          placeholder="Senha"
          type="text"
          id="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <StyledButton type="submit">Salvar</StyledButton>

        <StyledButton onClick={handleSair}>Sair</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
