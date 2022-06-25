import React from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledButton,
  StyledFlex,
} from "../styles";
import ImgJogo from "../assets/jogo.jpeg";

export default function ItemBiblioteca(props) {
  return (
    <StyledFlex>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.nome}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
          </StyledGeneros>
          <StyledButton noMargin>Baixar</StyledButton>
        </StyledConteudo>
        <p>{props.descricao}</p>
      </StyledCardGame>
    </StyledFlex>
  );
}
