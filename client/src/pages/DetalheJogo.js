import React, { useEffect, useState } from "react";
import { MarginVert, StyledContainer } from "../styles";

import Cabecalho from "../components/Cabecalho";
import Jogo from "../components/Jogo";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function DetalheJogo() {
  const { idJogo } = useParams();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [generos, setGeneros] = useState();

  useEffect(() => {
    api
      .get(`http://localhost:3000/jogos/${idJogo}`)
      .then(({ data }) => {
        setNome(data.nome);
        setDescricao(data.descricao);
        setPreco(data.preco);
        setGeneros(data.generos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <StyledContainer>
      <Cabecalho />
      <Jogo nome={nome} descricao={descricao} preco={preco} generos={generos} />
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
