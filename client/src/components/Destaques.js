import React from "react";
import {
  StyledDestaque,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledLink,
  StyledButton,
} from "../styles";

import Jogo from "../assets/jogo.jpeg";
import styled from "styled-components";

const Image = styled.img`
  object-fit: contain;
  object-position: left;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
`;

const StyledConteudo2 = styled(StyledConteudo)`
  text-align: start;
`;

export default function Destaques() {
  return (
    <StyledDestaque>
      <Image src={Jogo} alt="jogo" />
      <StyledConteudo2>
        <h1>God of war</h1>
        <StyledGeneros>
          <StyledCategoria> Ação</StyledCategoria>
          <StyledCategoria> RPG</StyledCategoria>
          <StyledCategoria> Aventura</StyledCategoria>
        </StyledGeneros>
        <p>
          Com a vingança contra os deuses do Olimpo em um passado distante,
          Kratos agora vive como um mortal no reino dos deuses e monstros
          nórdicos. É nesse mundo duro e implacável que ele deve lutar para
          sobreviver... e ensinar seu filho a fazer o mesmo.
        </p>
        <StyledLink to="/login">
          <StyledButton noMargin>Comprar</StyledButton>
        </StyledLink>
      </StyledConteudo2>
    </StyledDestaque>
  );
}
