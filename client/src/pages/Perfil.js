import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledInput,
  StyledContainer,
  StyledForm,
  StyledProfileImg,
  StyledButton,
  StyledLink,
} from "../styles";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import ImgPerfil from "../assets/perfil.jpg";

export default function Perfil() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isAdmin, setIsAdmin] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/?id=${id}`)
      .then(({ data }) => {
        setName(data.name);
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
        setIsAdmin(data.isAdmin);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleAtualizarUser(e) {
    e.preventDefault();

    const data = {
      name,
      username,
      email,
      password,
    };

    api
      .patch(`http://localhost:3000/usuarios/?id=${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleSair(e) {
    e.preventDefault();

    sessionStorage.removeItem("id");
    navigate("/");
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm onSubmit={handleAtualizarUser}>
        <h1>Perfil</h1>
        <StyledProfileImg src={ImgPerfil} alt="foto de perfil" />
        <StyledInput
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder="Password"
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Salvar</StyledButton>

        <StyledButton onClick={handleSair}>Sair</StyledButton>

        {isAdmin ? (
          <StyledLink to="/lista-de-jogos">
            <StyledButton>Lista de jogos</StyledButton>
          </StyledLink>
        ) : (
          <div></div>
        )}
      </StyledForm>
    </StyledContainer>
  );
}
