import React from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledLink,
  StyledButton,
} from "../styles";
import ImgJogo from "../assets/jogo.jpeg";

export default function CardJogo() {
  return (
    <StyledCardGame>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>God of war</h1>
        <StyledGeneros>
          <StyledCategoria> Ação</StyledCategoria>
          <StyledCategoria> RPG</StyledCategoria>
          <StyledCategoria> Aventura</StyledCategoria>
        </StyledGeneros>
        <StyledLink to="/login">
          <StyledButton>Comprar</StyledButton>
        </StyledLink>
      </StyledConteudo>
    </StyledCardGame>
  );
}
