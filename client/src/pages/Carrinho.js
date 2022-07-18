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
import { AuthContext } from "../providers/auth";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [jogos, setJogos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (carrinho !== [])
      api({
        method: "get",
        url: `http://localhost:3000/users/cart`,
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
        },
      })
        .then((data) => {
          setCarrinho(data.data);
        })
        .catch((erro) => {
          alert(erro);
        });
  }, []);

  useEffect(() => {
    carrinho.map((id) => {
      console.log(id);
      api({
        method: "get",
        url: `http://localhost:3000/games/${id}`,
      })
        .then((data) => {
          setJogos((oldArray) => [...oldArray, data.data]);
        })
        .catch((erro) => {
          alert(erro);
        });
    });
  }, [carrinho]);

  function handleEsvaziar(e) {
    // e.preventDefault();
    // setCarrinho([]);
    // localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  function handleFinalizar(e) {
    // e.preventDefault();
    // carrinho.map((jogo) => jogosUser.push(jogo._id));
    // const data = {
    //   games: jogosUser,
    // };
    // api
    //   .patch(`http://localhost:3000/games/id=${id}`, data)
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    // setCarrinho([]);
    // localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  function handleCalcTotal() {
    let total = 0;
    jogos.map((jogo) => (total += jogo.price));

    return total;
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Carrinho</StyledTitulo>
      <StyledList>
        {console.log(jogos)}
        {jogos.map((item) => (
          <ItemCarrinho
            key={item._id}
            _id={item._id}
            title={item.title}
            genders={item.genders}
            price={item.price}
          />
        ))}
      </StyledList>
      <StyledTitulo margem>Sub-total: R${handleCalcTotal()}</StyledTitulo>
      <StyledFlex>
        <StyledButton pequeno onClick={handleFinalizar}>
          Finalizar compra
        </StyledButton>
        <StyledButton pequeno onClick={handleEsvaziar}>
          Esvaziar carrinho
        </StyledButton>
      </StyledFlex>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
