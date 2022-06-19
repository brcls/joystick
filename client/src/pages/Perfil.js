import React from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledInput,
  StyledContainer,
  StyledForm,
  StyledProfileImg,
  StyledLink,
  StyledButton,
} from "../styles";
import ImgPerfil from "../assets/perfil.jpg";

export default function Perfil() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm>
        <h1>Perfil</h1>
        <StyledProfileImg src={ImgPerfil} alt="foto de perfil" />
        <StyledInput placeholder="Nome" type="text" id="name" />
        <StyledInput placeholder="Username" type="text" id="username" />
        <StyledInput placeholder="E-mail" type="email" id="email" />
        <StyledInput placeholder="Senha" type="password" id="password" />
        <StyledLink to="/">
          <StyledButton type="submit">Salvar</StyledButton>
        </StyledLink>
        <StyledLink to="/">
          <StyledButton>Sair</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
