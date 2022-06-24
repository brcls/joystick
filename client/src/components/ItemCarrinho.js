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
`;

export default function ItemCarrinho(props) {
  const { carrinho, setCarrinho } = React.useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }, []);

  function handleRemoveItem(e) {
    e.preventDefault();

    setCarrinho(carrinho.filter((item) => item.id !== props.id));
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  return (
    <StyledFlex>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.nome}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero ? props.genero[0] : "teste"}
            </StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>{props.preco}</StyledTitulo>
        </StyledConteudo>
      </StyledCardGame>
      <StyledButtonCart onClick={handleRemoveItem}>
        <StyledTitulo>
          <GiCancel />
        </StyledTitulo>
      </StyledButtonCart>
    </StyledFlex>
  );
}
