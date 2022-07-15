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
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [gender, setGender] = useState();
  const [gender2, setGender2] = useState();
  const [gender3, setGender3] = useState();
  const [carousel, setCarousel] = useState();
  const [best, setBest] = useState();
  const [release, setRelease] = useState();
  const [genders, setGenders] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("http://localhost:3000/genders")
      .then(({ data }) => {
        setGenders(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleNovoJogo(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      price: parseInt(price, 10),
      gender: [gender, gender2, gender3],
      carousel,
      best,
      release,
    };

    api
      .post("http://localhost:3000/games", data)
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
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledTextarea
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledInput
          required
          placeholder="Preço"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Gêneros</label>
        <StyledSelect
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option></option>
          {genders
            ? genders.map((gender) => (
                <option value={gender.gender} key={gender.id}>
                  {gender.gender}
                </option>
              ))
            : "nada"}
        </StyledSelect>
        <StyledSelect
          required
          value={gender2}
          onChange={(e) => setGender2(e.target.value)}
        >
          <option></option>
          {genders
            ? genders.map((gender) => (
                <option value={gender.gender} key={gender.id}>
                  {gender.gender}
                </option>
              ))
            : "nada"}
        </StyledSelect>
        <StyledSelect
          required
          value={gender3}
          onChange={(e) => setGender3(e.target.value)}
        >
          <option></option>
          {genders
            ? genders.map((gender) => (
                <option value={gender.gender} key={gender.id}>
                  {gender.gender}
                </option>
              ))
            : "nada"}
        </StyledSelect>
        <label>Carousel</label>
        <StyledSelect
          required
          value={carousel}
          onChange={(e) => setCarousel(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <label>Best</label>
        <StyledSelect
          required
          value={best}
          onChange={(e) => setBest(e.target.value)}
        >
          <option></option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </StyledSelect>
        <label>Release</label>
        <StyledSelect
          required
          value={release}
          onChange={(e) => setRelease(e.target.value)}
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
