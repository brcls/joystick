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
import styled from "styled-components";

const Image = styled.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`;

export default function CardJogo(props) {
  const navigate = useNavigate();

  function handleAbrirJogo() {
    navigate(`/detalhe-jogo/${props.id}`);
  }

  return (
    <StyledCardGame>
      <Image src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>{props.nome}</h1>
        <StyledGeneros>
          <StyledCategoria> {props.generos[0]}</StyledCategoria>
          <StyledCategoria> {props.generos[1]}</StyledCategoria>
          <StyledCategoria> {props.generos[2]}</StyledCategoria>
        </StyledGeneros>
        <StyledButton noMargin onClick={handleAbrirJogo}>
          Comprar
        </StyledButton>
      </StyledConteudo>
    </StyledCardGame>
  );
}
