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

export default function ItemBiblioteca({}) {
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
          <StyledButton noMargin>Baixar</StyledButton>
        </StyledConteudo>
        <p>
          Com a vingança contra os deuses do Olimpo em um passado distante,
          Kratos agora vive como um mortal no reino dos deuses e monstros
          nórdicos. É nesse mundo duro e implacável que ele deve lutar para
          sobreviver... e ensinar seu filho a fazer o mesmo.
        </p>
      </StyledCardGame>
    </StyledFlex>
  );
}
