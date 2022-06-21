import React from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledTitulo,
  StyledFlex,
  StyledRoundButton,
} from "../styles";
import styled from "styled-components";
import ImgJogo from "../assets/jogo.jpeg";
import { GiCancel } from "react-icons/gi";

const StyledButtonCart = styled(StyledRoundButton)`
  margin-right: 50px;
`;

export default function ItemCarrinho(props) {
  return (
    <StyledFlex>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.nome}</h1>
          <StyledGeneros>
            <StyledCategoria> {props.genero[0]}</StyledCategoria>
            <StyledCategoria>{props.genero[1]}</StyledCategoria>
            <StyledCategoria> {props.genero[2]}</StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>{props.preco}</StyledTitulo>
        </StyledConteudo>
      </StyledCardGame>
      <StyledButtonCart>
        <StyledTitulo>
          <GiCancel />
        </StyledTitulo>
      </StyledButtonCart>
    </StyledFlex>
  );
}
