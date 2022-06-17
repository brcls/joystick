import React from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
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
        <button>Comprar</button>
      </StyledConteudo>
    </StyledCardGame>
  );
}
