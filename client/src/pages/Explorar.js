import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import CardJogo from "../components/CardJogo";
import Destaques from "../components/Destaques";
import Background from "../assets/Cyberpunk-Multiplayer.png.webp";
import { Carousel } from "react-responsive-carousel";
import {
  StyledList,
  StyledContainer,
  StyledTitulo,
  StyledFlex,
} from "../styles";
import api from "../services/api";
import styled from "styled-components";

const StyledContainer2 = styled(StyledContainer)`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2),
      rgba(39, 38, 80, 2)
    ),
    url(${Background});
  background-repeat: no-repeat;
`;

export default function Explorar() {
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
    <StyledContainer2>
      <Cabecalho />
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        {jogos
          .filter((jogo) => jogo.destaque === "true")
          .map((jogo) => (
            <Destaques
              key={jogo.id}
              id={jogo.id}
              nome={jogo.nome}
              generos={jogo.genero}
              descricao={jogo.descricao}
            />
          ))}
      </Carousel>
      <StyledFlex>
        <div>
          <StyledTitulo margem>Jogos em alta</StyledTitulo>
          <StyledList>
            {jogos
              .filter((jogo) => jogo.destaque === "true")
              .map((jogo) => (
                <CardJogo
                  key={jogo.id}
                  id={jogo.id}
                  nome={jogo.nome}
                  generos={jogo.genero}
                  descricao={jogo.descricao}
                />
              ))}
          </StyledList>
        </div>
        <div>
          <StyledTitulo margem>Novidades</StyledTitulo>
          <Carousel>
            {jogos
              .filter((jogo) => jogo.novidade === "true")
              .map((jogo) => (
                <CardJogo
                  key={jogo.id}
                  id={jogo.id}
                  nome={jogo.nome}
                  generos={jogo.genero}
                  descricao={jogo.descricao}
                />
              ))}
          </Carousel>
          <StyledTitulo margem>Jogos grátis</StyledTitulo>
          <Carousel>
            {jogos
              .filter((jogo) => jogo.isFree === "true")
              .map((jogo) => (
                <CardJogo
                  key={jogo.id}
                  id={jogo.id}
                  nome={jogo.nome}
                  generos={jogo.genero}
                  descricao={jogo.descricao}
                />
              ))}
          </Carousel>
        </div>
      </StyledFlex>
    </StyledContainer2>
  );
}
