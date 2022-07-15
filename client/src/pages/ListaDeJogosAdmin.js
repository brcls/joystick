import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import ItemCarrinho from "../components/ItemCarrinho";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  MarginVert,
} from "../styles";
import api from "../services/api";
import ItemListaDeJogos from "../components/ItemListaDeJogos";

export default function ListaDeJogosAdmin() {
  const [jogos, setJogos] = useState([]);
  useEffect(() => {
    api
      .get("http://localhost:3000/games")
      .then(({ data }) => {
        setJogos(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [jogos]);

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Jogos da loja</StyledTitulo>
      <StyledList>
        {jogos.map((jogo) => (
          <ItemListaDeJogos
            key={jogo.id}
            id={jogo.id}
            name={jogo.name}
            genders={jogo.genders}
            price={jogo.price}
            description={jogo.description}
          />
        ))}
      </StyledList>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
