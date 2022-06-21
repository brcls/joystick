import React from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledButton,
} from "../styles";
import ImgJogo from "../assets/jogo.jpeg";
import { useNavigate } from "react-router-dom";

export default function CardJogo(props) {
  const navigate = useNavigate();

  function handleAbrirJogo() {
    navigate(`/detalhe-jogo/${props.id}`);
  }

  return (
    <StyledCardGame onClick={handleAbrirJogo}>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>{props.nome}</h1>
        <StyledGeneros>
          <StyledCategoria> {props.generos[0]}</StyledCategoria>
          <StyledCategoria> {props.generos[1]}</StyledCategoria>
          <StyledCategoria> {props.generos[2]}</StyledCategoria>
        </StyledGeneros>
        <StyledButton noMargin>Comprar</StyledButton>
      </StyledConteudo>
      <p>{props.descricao}</p>
    </StyledCardGame>
  );
}
