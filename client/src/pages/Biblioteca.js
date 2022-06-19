import React from "react";
import Cabecalho from "../components/Cabecalho";
import ItemBiblioteca from "../components/ItemBiblioteca";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  StyledButton,
  StyledFlex,
  MarginVert,
} from "../styles";

export default function BiItemBiblioteca() {
  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Biblioteca</StyledTitulo>
      <StyledList>
        <ItemBiblioteca />
        <ItemBiblioteca />
        <ItemBiblioteca />
        <ItemBiblioteca />
        <ItemBiblioteca />
      </StyledList>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
