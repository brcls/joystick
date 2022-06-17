import React from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLink,
  StyledButton,
} from "../styles";

export default function Cadastro() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm>
        <h1 class="title">Cadastro</h1>
        <StyledInput placeholder="Nome" type="text" />
        <StyledInput placeholder="Username" type="text" />
        <StyledInput placeholder="E-mail" type="email" />
        <StyledInput placeholder="Senha" type="password" />
        <StyledLink to="/">
          <StyledButton type="submit">Cadastro</StyledButton>
        </StyledLink>
        <p>Já possui cadastro?</p>
        <StyledLink to="/login">
          <StyledButton>Login</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
