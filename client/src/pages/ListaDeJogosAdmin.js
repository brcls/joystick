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
      .get("http://localhost:3000/jogos")
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
            nome={jogo.nome}
            genero={jogo.genero}
            preco={jogo.preco}
            descricao={jogo.descricao}
          />
        ))}
      </StyledList>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
