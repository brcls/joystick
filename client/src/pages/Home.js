import React from "react";
import Cabecalho from "../components/Cabecalho";
import CardJogo from "../components/CardJogo";
import Destaques from "../components/Destaques";
import {
  StyledList,
  StyledContainer,
  StyledTitulo,
  StyledSubTitulo,
} from "../styles";
export default function Home() {
  return (
    <StyledContainer>
      <Cabecalho />
      <Destaques />
      <StyledTitulo margem>Melhores Jogos</StyledTitulo>
      <StyledSubTitulo cinza margem>
        Explore os melhores projetos da plataforma
      </StyledSubTitulo>
      <StyledList>
        <CardJogo />
        <CardJogo />
        <CardJogo />
        <CardJogo />
      </StyledList>
    </StyledContainer>
  );
}
