import React from "react";
import {
  StyledJogo,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledLink,
  StyledButton,
} from "../styles";

import ImgJogo from "../assets/jogo.jpeg";

export default function Jogo(props) {
  return (
    <StyledJogo>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>{props.nome}</h1>
        <StyledGeneros>
          <StyledCategoria>{props.generos}</StyledCategoria>
          <StyledCategoria> RPG</StyledCategoria>
          <StyledCategoria> Aventura</StyledCategoria>
        </StyledGeneros>
        <p>{props.descricao}</p>
        <StyledLink to="/carrinho">
          <StyledButton noMargin>Comprar</StyledButton>
        </StyledLink>
      </StyledConteudo>
    </StyledJogo>
  );
}
