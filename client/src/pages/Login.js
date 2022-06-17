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
        <h1>Login</h1>
        <StyledInput placeholder="E-mail" type="email" />
        <StyledInput placeholder="Senha" type="password" />
        <StyledLink to="/">
          <StyledButton type="submit">Login</StyledButton>
        </StyledLink>
        <p>Não possui cadastro?</p>
        <StyledLink to="/cadastro">
          <StyledButton>Cadastro</StyledButton>
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}
