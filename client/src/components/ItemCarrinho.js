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

export default function ItemCarrinho() {
  return (
    <StyledFlex>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>God of war</h1>
          <StyledGeneros>
            <StyledCategoria> Ação</StyledCategoria>
            <StyledCategoria> RPG</StyledCategoria>
            <StyledCategoria> Aventura</StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>R$ 230,00</StyledTitulo>
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
