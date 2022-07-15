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
          <h1>{props.title}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genders ? props.genders[0] : ""}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders ? props.genders[1] : ""}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders ? props.genders[2] : ""}
            </StyledCategoria>
          </StyledGeneros>
          <StyledButton noMargin>Baixar</StyledButton>
        </StyledConteudo>
        <p>{props.description}</p>
      </StyledCardGame>
    </StyledFlex>
  );
}
