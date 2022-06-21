import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [carrinho, setCarrinho] = useState([{}]);
  const navigate = useNavigate();

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

  function isEmpty() {
    if (Object.keys(carrinho).length === 0) {
      return <StyledTitulo margem>Carrinho vazio</StyledTitulo>;
    }

    return carrinho.map((jogo) => (
      <ItemCarrinho
        key={jogo.id}
        id={jogo.id}
        nome={jogo.nome}
        genero={jogo.genero}
        descricao={jogo.descricao}
        preco={jogo.preco}
      />
    ));
  }

  function calcularSubTotal() {}

  function handleFinalizar() {}

  function handleEsvaziar() {
    setCarrinho([{}]);

    const data = {
      cart: [
        {
          nome: "",
          descricao: "",
          preco: "",
          genero: ["", "", ""],
          destaque: "",
          melhores: "",
          isFree: "",
          id: "",
        },
      ],
    };

    api
      .patch(`http://localhost:3000/usuarios/${id}`, data)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Carrinho</StyledTitulo>
      <StyledList>{isEmpty(carrinho)}</StyledList>
      <StyledTitulo margem>Sub-total: R$ 690,00</StyledTitulo>
      <StyledFlex>
        <StyledButton pequeno onClick={handleEsvaziar}>
          Finalizar compra
        </StyledButton>
        <StyledButton pequeno>Esvaziar carrinho</StyledButton>
      </StyledFlex>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
