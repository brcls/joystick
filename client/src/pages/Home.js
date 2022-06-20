import React from "react";
import Cabecalho from "../components/Cabecalho";
import CardJogo from "../components/CardJogo";
import Destaques from "../components/Destaques";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <Destaques />
        <Destaques />
        <Destaques />
      </Carousel>

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
