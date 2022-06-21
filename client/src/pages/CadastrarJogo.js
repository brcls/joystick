import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import api from "../services/api";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTextarea,
} from "../styles";

export default function CadastrarJogo() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [generos, setGeneros] = useState();
  const navigate = useNavigate();

  function handleNovoJogo(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
      preco,
      generos,
      destaque: false,
      melhores: false,
    };

    api
      .post("http://localhost:3000/jogos", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <StyledContainer>
      <Cabecalho />
      <StyledForm onSubmit={handleNovoJogo}>
        <h1>Cadastro de Jogo</h1>
        <StyledInput
          required
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <StyledTextarea
          required
          placeholder="Descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Preço"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Generos"
          type="text"
          value={generos}
          onChange={(e) => setGeneros(e.target.value)}
        />
        <StyledButton type="submit">Cadastrar jogo</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
