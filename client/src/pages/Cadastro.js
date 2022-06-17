import React from "react";
import Cabecalho from "../components/Cabecalho";
import { StyledContainer, StyledForm, StyledInput } from "../styles";

export default function Cadastro() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm>
        <h1 class="title">Cadastro</h1>
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
        <StyledInput class="submit" type="button" value="Cadastro" />
      </StyledForm>
    </StyledContainer>
  );
}
