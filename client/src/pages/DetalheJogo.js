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
  const [genero, setGenero] = useState([]);
  const [destaque, setDestaque] = useState();
  const [melhores, setMelhores] = useState();
  const [isFree, setIsFree] = useState();

  useEffect(() => {
    api
      .get(`http://localhost:3000/jogos/${idJogo}`)
      .then(({ data }) => {
        setNome(data.nome);
        setDescricao(data.descricao);
        setPreco(data.preco);
        setGenero(data.genero);
        setDestaque(data.destaque);
        setMelhores(data.melhores);
        setIsFree(data.isFree);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <StyledContainer>
      <Cabecalho />
      <Jogo
        nome={nome}
        descricao={descricao}
        preco={preco}
        genero={genero}
        destaque={destaque}
        melhores={melhores}
        isFree={isFree}
        id={idJogo}
      />
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
