import React from "react";
import Cabecalho from "../components/Cabecalho";
import ItemCarrinho from "../components/ItemCarrinho";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  MarginVert,
} from "../styles";

export default function ListaDeJogosAdmin() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Jogos da loja</StyledTitulo>
      <StyledList>
        <ItemCarrinho />
        <ItemCarrinho />
        <ItemCarrinho />
      </StyledList>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
