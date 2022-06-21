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

export default function CardJogo(props) {
  function handleAbrirJogo() {
    console.log("teste");
  }

  return (
    <StyledCardGame onClick={handleAbrirJogo}>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>{props.nome}</h1>
        <StyledGeneros>
          <StyledCategoria> {props.generos}</StyledCategoria>
          <StyledCategoria> RPG</StyledCategoria>
          <StyledCategoria> Aventura</StyledCategoria>
        </StyledGeneros>
        <StyledLink to="/login">
          <StyledButton noMargin>Comprar</StyledButton>
        </StyledLink>
      </StyledConteudo>
      <p>{props.descricao}</p>
    </StyledCardGame>
  );
}
