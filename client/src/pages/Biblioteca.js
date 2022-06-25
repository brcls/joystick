import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import ItemBiblioteca from "../components/ItemBiblioteca";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  MarginVert,
} from "../styles";
import api from "../services/api";

export default function Biblioteca() {
  const { id } = useParams();
  const [biblioteca, setBiblioteca] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/${id}`)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch((error) => {
        alert(error);
      });

    api
      .get("http://localhost:3000/jogos")
      .then(({ data }) => {
        setJogos(data);
      })
      .catch((error) => {
        alert(error);
      });

    if (usuario.idJogos) {
      for (var i = 0; i < usuario.idJogos.length; i++) {
        const auxiliar = jogos.find((jogo) => jogo.id === usuario.idJogos[i]);

        if (auxiliar && !biblioteca.find((item) => item.id === auxiliar.id)) {
          setBiblioteca([...biblioteca, { ...auxiliar }]);
        }
      }
    }
  }, [usuario]);

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Biblioteca</StyledTitulo>
      <StyledList>
        {biblioteca.map((jogo) => (
          <ItemBiblioteca
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
