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
      title: props.title,
      description: props.description,
      price: props.price,
      genders: props.genders,
      carousel: props.carousel,
      best: props.best,
      new: props.new,
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
        <h1>{props.title}</h1>
        <StyledGeneros>
          <StyledCategoria>{props.genders[0]}</StyledCategoria>
          <StyledCategoria> {props.genders[1]}</StyledCategoria>
          <StyledCategoria> {props.genders[2]}</StyledCategoria>
        </StyledGeneros>
        <p>{props.description}</p>
        <StyledButton noMargin onClick={handleComprarJogo}>
          Comprar
        </StyledButton>
      </StyledConteudo>
    </StyledJogo>
  );
}
