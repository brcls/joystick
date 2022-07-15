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
  const [user, setUser] = useState();
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        "x-access-token": sessionStorage.getItem("token"),
      },
    };
    api
      .get(`http://localhost:3000/users`, config)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAtualizarUser(e) {
    e.preventDefault();

    api
      .put(`http://localhost:3000/users`, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          data: newUser,
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleSair(e) {
    e.preventDefault();

    sessionStorage.removeItem("token");
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
          value={user.name}
          onChange={(e) => setNewUser(...user, { name: e.target.value })}
        />
        <StyledInput
          placeholder="Username"
          type="text"
          value={user.username}
          onChange={(e) => setNewUser(...user, { username: e.target.value })}
        />
        <StyledInput
          placeholder="E-mail"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setNewUser(...user, { email: e.target.value })}
        />
        <StyledInput
          placeholder="Password"
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => setNewUser(...user, { password: e.target.value })}
        />
        <StyledButton type="submit">Salvar</StyledButton>

        <StyledButton onClick={handleSair}>Sair</StyledButton>

        {user.isAdmin ? (
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
