import React, { useEffect } from "react";
import {
  StyledJogo,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledButton,
} from "../styles";

import ImgJogo from "../assets/jogo.jpeg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/auth";

export default function Jogo(props) {
  const token = sessionStorage.getItem("id");
  const { carrinho, setCarrinho } = React.useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }, [carrinho]);

  function handleComprarJogo(e) {
    e.preventDefault();

    const jogo = {
      nome: props.nome,
      descricao: props.descricao,
      preco: props.preco,
      genero: props.genero,
      destaque: props.destaque,
      melhores: props.melhores,
      isFree: props.isFree,
      id: parseInt(props.id, 10),
    };

    setCarrinho([...carrinho, { ...jogo }]);
    localStorage.setItem("cart", JSON.stringify(carrinho));
    navigate(`/carrinho/${token}`);
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
