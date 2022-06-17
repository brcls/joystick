import React from "react";
import Cabecalho from "../components/Cabecalho";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLink,
  StyledButton,
} from "../styles";

export default function Login() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm>
        <h1 class="title">Login</h1>
        <StyledInput placeholder="E-mail" type="email" id="email" />
        <StyledInput placeholder="Senha" type="password" id="password" />
        <StyledButton type="submit">Login</StyledButton>
        <p>Não possui cadastro?</p>
        <StyledLink to="/cadastro">
          <StyledButton>Cadastro</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
