import React, { useEffect, useState } from "react";
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
import api from "../services/api";

export default function Home() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/jogos")
      .then(({ data }) => {
        setJogos(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
        {jogos.map((jogo) => (
          <CardJogo
            key={jogo.id}
            id={jogo.id}
            nome={jogo.nome}
            generos={jogo.generos}
            descricao={jogo.descricao}
          />
        ))}
      </StyledList>
    </StyledContainer>
  );
}
