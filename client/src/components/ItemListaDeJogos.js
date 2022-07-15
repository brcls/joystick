import React, { useEffect } from "react";
import {
  StyledCardGame,
  StyledConteudo,
  StyledGeneros,
  StyledCategoria,
  StyledTitulo,
  StyledFlex,
  StyledRoundButton,
  StyledLink,
} from "../styles";
import styled from "styled-components";
import ImgJogo from "../assets/jogo.jpeg";
import { GiCancel } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
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
    api
      .delete(`http://localhost:3000/jogos/?id=${props._id}`)
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <StyledFlex2>
      <StyledCardGame baixo>
        <img src={ImgJogo} alt="jogo" />
        <StyledConteudo>
          <h1>{props.title}</h1>
          <StyledGeneros>
            <StyledCategoria>
              {props.genders[0] ? props.genders[0] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders[1] ? props.genders[1] : "teste"}
            </StyledCategoria>
            <StyledCategoria>
              {props.genders[2] ? props.genders[2] : "teste"}
            </StyledCategoria>
          </StyledGeneros>
          <StyledTitulo>{props.preco}</StyledTitulo>
        </StyledConteudo>
        <p>{props.decription}</p>
      </StyledCardGame>
      <StyledButtonCart onClick={handleRemoveItem}>
        <GiCancel />
      </StyledButtonCart>
      <StyledLink to={`/editar-jogo/${props._id}`}>
        <StyledButtonCart>
          <FaEdit />
        </StyledButtonCart>
      </StyledLink>
    </StyledFlex2>
  );
}
