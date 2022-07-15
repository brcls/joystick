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
      .get(`http://localhost:3000/users/?id=${id}`)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch((error) => {
        alert(error);
      });

    api
      .get("http://localhost:3000/games")
      .then(({ data }) => {
        setJogos(data);
      })
      .catch((error) => {
        alert(error);
      });

    if (usuario.games) {
      for (var i = 0; i < usuario.games.length; i++) {
        const auxiliar = jogos.find((jogo) => jogo._id === usuario.games[i]);

        if (auxiliar && !biblioteca.find((item) => item._id === auxiliar._id)) {
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
            key={jogo._id}
            _id={jogo._id}
            title={jogo.title}
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
