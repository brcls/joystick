import React from "react";
import {
  StyledDestaque,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
} from "../styles";

import Jogo from "../assets/jogo.jpeg";

export default function Destaques() {
  return (
    <StyledDestaque>
      <img src={Jogo} alt="jogo" />
      <StyledConteudo>
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
        <button>Comprar</button>
      </StyledConteudo>
    </StyledDestaque>
  );
}
