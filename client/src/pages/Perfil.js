import React from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledInput,
  StyledContainer,
  StyledForm,
  StyledProfileImg,
} from "../styles";
import ImgPerfil from "../assets/perfil.jpg";

export default function Perfil() {
  return (
    <StyledContainer>
      <Cabecalho />
      <h1 class="title">Perfil</h1>

      <StyledForm>
        <StyledProfileImg src={ImgPerfil} alt="foto de perfil" />
        <div>
          <label for="name">Nome</label>
          <StyledInput type="text" id="name" />
        </div>
        <div>
          <label for="username">Username</label>
          <StyledInput type="text" id="username" />
        </div>
        <div>
          <label for="email">E-email</label>
          <StyledInput type="email" id="email" />
        </div>
        <div>
          <label for="password">Senha</label>
          <StyledInput type="password" id="password" />
        </div>
        <StyledInput class="submit" type="button" value="Salvar" />
        <button class="button">Sair</button>
      </StyledForm>
    </StyledContainer>
  );
}
