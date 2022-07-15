import React, { useEffect, useState } from "react";
import { MarginVert, StyledContainer } from "../styles";

import Cabecalho from "../components/Cabecalho";
import Jogo from "../components/Jogo";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function DetalheJogo() {
  const { idJogo } = useParams();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [genders, setGenders] = useState([]);
  const [carousel, setCarousel] = useState();
  const [best, setBest] = useState();
  const [isFree, setIsFree] = useState();

  useEffect(() => {
    api
      .get(`http://localhost:3000/games/?id=${idJogo}`)
      .then(({ data }) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setGenders(data.genders);
        setCarousel(data.carousel);
        setBest(data.best);
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
        name={name}
        description={description}
        price={price}
        genders={genders}
        carousel={carousel}
        best={best}
        isFree={isFree}
        id={idJogo}
      />
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
