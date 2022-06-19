import React from "react";
import { MarginVert, StyledContainer } from "../styles";

import Cabecalho from "../components/Cabecalho";
import Jogo from "../components/Jogo";

export default function DetalheJogo() {
  return (
    <StyledContainer>
      <Cabecalho />
      <Jogo />
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
