import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import api from "../services/api";

export default function Carrinho() {
  const { id } = useParams();
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/${id}`)
      .then(({ data }) => {
        setCarrinho(data.cart);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function isEmpty(carrinho) {
    if (Object.keys(carrinho).length === 0) {
      return true;
    }
    return false;
  }

  function calcularSubTotal() {}

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Carrinho</StyledTitulo>
      <StyledList>
        {isEmpty(carrinho) ? (
          carrinho.map((jogo) => (
            <ItemCarrinho
              key={jogo.id}
              id={jogo.id}
              nome={jogo.nome}
              genero={jogo.genero}
              descricao={jogo.descricao}
              preco={jogo.preco}
            />
          ))
        ) : (
          <StyledTitulo margem>Carrinho vazio</StyledTitulo>
        )}
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
