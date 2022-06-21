import React, { useEffect, useState } from "react";
import {
  StyledJogo,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledButton,
} from "../styles";
import api from "../services/api";

import ImgJogo from "../assets/jogo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Jogo(props) {
  const token = sessionStorage.getItem("id");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/${token}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleComprarJogo(e) {
    e.preventDefault();

    const data = {
      nome: user.nome,
      username: user.username,
      email: user.email,
      senha: user.senha,
      idJogos: user.idJogos,
      isAdmin: false,
      cart: [
        ...user.cart,
        {
          nome: props.nome,
          descricao: props.descricao,
          preco: props.preco,
          genero: [props.genero[0], props.genero[1], props.genero[2]],
          destaque: props.destaque,
          melhores: props.melhores,
          isFree: props.isFree,
          id: props.id,
        },
      ],
    };

    api
      .put(`http://localhost:3000/usuarios/${token}`, data)
      .then(() => {
        console.log(user);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <StyledJogo>
      <img src={ImgJogo} alt="jogo" />
      <StyledConteudo>
        <h1>{props.nome}</h1>
        <StyledGeneros>
          <StyledCategoria>{props.genero[0]}</StyledCategoria>
          <StyledCategoria> {props.genero[1]}</StyledCategoria>
          <StyledCategoria> {props.genero[2]}</StyledCategoria>
        </StyledGeneros>
        <p>{props.descricao}</p>
        <StyledButton noMargin onClick={handleComprarJogo}>
          Comprar
        </StyledButton>
      </StyledConteudo>
    </StyledJogo>
  );
}
