import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import api from "../services/api";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTextarea,
  StyledSelect,
  MarginVert,
} from "../styles";

export default function CadastrarJogo() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState();
  const [genero, setGenero] = useState();
  const [genero2, setGenero2] = useState();
  const [genero3, setGenero3] = useState();
  const [destaque, setDestaque] = useState();
  const [melhores, setMelhores] = useState();
  const [novidade, setNovidade] = useState();
  const [isFree, setIsFree] = useState();
  const [generos, setGeneros] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("http://localhost:3000/generos")
      .then(({ data }) => {
        setGeneros(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleNovoJogo(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
      preco,
      genero: [genero, genero2, genero3],
      destaque,
      melhores,
      isFree,
      novidade,
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
        <label>Gêneros</label>
        <StyledSelect
          required
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option></option>
          {generos?.map((genero) => (
            <option value={genero.genero} key={genero.id}>
              {genero.genero}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect
          required
          value={genero2}
          onChange={(e) => setGenero2(e.target.value)}
        >
          <option></option>
          {generos?.map((genero) => (
            <option value={genero.genero} key={genero.id}>
              {genero.genero}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect
          required
          value={genero3}
          onChange={(e) => setGenero3(e.target.value)}
        >
          <option></option>
          {generos?.map((genero) => (
            <option value={genero.genero} key={genero.id}>
              {genero.genero}
            </option>
          ))}
        </StyledSelect>
        <label>Destaque</label>
        <StyledSelect
          required
          value={destaque}
          onChange={(e) => setDestaque(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <label>Melhores</label>
        <StyledSelect
          required
          value={melhores}
          onChange={(e) => setMelhores(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <label>De graça</label>
        <StyledSelect
          required
          value={isFree}
          onChange={(e) => setIsFree(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <StyledSelect
          required
          value={novidade}
          onChange={(e) => setNovidade(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <StyledButton type="submit">Cadastrar jogo</StyledButton>
      </StyledForm>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
