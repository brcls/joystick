import React from "react";
import Cabecalho from "../components/Cabecalho";
import CardJogo from "../components/CardJogo";
import Destaques from "../components/Destaques";
import { StyledList, StyledContainer } from "../styles";
export default function Home() {
  return (
    <StyledContainer>
      <Cabecalho />
      <Destaques />
      <StyledList>
        <CardJogo />
      </StyledList>
    </StyledContainer>
  );
}
