import React, { useEffect } from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledTitulo,
  StyledFlex,
  StyledRoundButton,
} from "../styles";
import styled from "styled-components";
import ImgJogo from "../assets/jogo.jpeg";
import { GiCancel } from "react-icons/gi";
import { AuthContext } from "../providers/auth";

const StyledButtonCart = styled(StyledRoundButton)`
  margin-right: 50px;
  font-size: 30px;
`;

const StyledFlex2 = styled(StyledFlex)`
  align-items: center;
`;

export default function ItemCarrinho(props) {
  const { carrinho, setCarrinho } = React.useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }, []);

  function handleRemoveItem(e) {
    e.preventDefault();

    setCarrinho(carrinho.filter((item) => item._id !== props._id));
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  return (
    <StyledFlex2>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.title}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genders ? props.genders[0] : ""}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders ? props.genders[1] : ""}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders ? props.genders[2] : ""}
            </StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>R${props.price}</StyledTitulo>
        </StyledConteudo>
      </StyledCardGame>
      <StyledButtonCart onClick={handleRemoveItem}>
        <GiCancel />
      </StyledButtonCart>
    </StyledFlex2>
  );
}
