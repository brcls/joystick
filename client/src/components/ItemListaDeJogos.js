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
import api from "../services/api";

const StyledButtonCart = styled(StyledRoundButton)`
  margin-right: 50px;
  font-size: 30px;
`;

const StyledFlex2 = styled(StyledFlex)`
  align-items: center;
`;

export default function ItemListaDeJogos(props) {
  function handleRemoveItem(e) {
    e.preventDefault();
    api.delete(`http://localhost:3000/jogos/${props.id}`).catch((error) => {
      alert(error);
    });
  }

  return (
    <StyledFlex2>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.nome}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genero[0] ? props.genero[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero[1] ? props.genero[1] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genero[2] ? props.genero[2] : "teste"}
            </StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>{props.preco}</StyledTitulo>
        </StyledConteudo>
        <p>{props.descricao}</p>
      </StyledCardGame>
      <StyledButtonCart onClick={handleRemoveItem}>
        <GiCancel />
      </StyledButtonCart>
    </StyledFlex2>
  );
}
