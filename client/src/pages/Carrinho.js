import React from "react";
import Cabecalho from "../components/Cabecalho";
import ItemCarrinho from "../components/ItemCarrinho";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  StyledButton,
  StyledFlex,
  MarginVert,
} from "../styles";

export default function Carrinho() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Carrinho</StyledTitulo>
      <StyledList>
        <ItemCarrinho />
        <ItemCarrinho />
        <ItemCarrinho />
      </StyledList>
      <StyledTitulo margem>Sub-total: R$ 690,00</StyledTitulo>
      <StyledFlex>
        <StyledButton pequeno>Finalizar compra</StyledButton>
        <StyledButton pequeno>Esvaziar carrinho</StyledButton>
      </StyledFlex>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
