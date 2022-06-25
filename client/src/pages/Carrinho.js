import React, { useEffect } from "react";
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
  const { id } = useParams();
  const { carrinho, setCarrinho } = React.useContext(AuthContext);
  const navigate = useNavigate();
  let jogosUser = [];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrinho));

    api
      .get(`http://localhost:3000/usuarios/${id}`)
      .then(({ data }) => {
        jogosUser = data.idJogos.slice();
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleEsvaziar(e) {
    e.preventDefault();

    setCarrinho([]);
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  function handleFinalizar(e) {
    e.preventDefault();

    carrinho.map((jogo) => jogosUser.push(jogo.id));

    const data = {
      idJogos: jogosUser,
    };

    api
      .patch(`http://localhost:3000/usuarios/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });

    setCarrinho([]);
    localStorage.setItem("cart", JSON.stringify(carrinho));
  }

  function handleCalcTotal() {
    let total = 0;

    carrinho.map((jogo) => (total += jogo.preco));
    console.log(total);

    return total;
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledTitulo margem>Carrinho</StyledTitulo>
      <StyledList>
        {carrinho.map((jogo) => (
          <ItemCarrinho
            key={jogo.id}
            id={jogo.id}
            nome={jogo.nome}
            genero={jogo.genero}
            preco={jogo.preco}
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
