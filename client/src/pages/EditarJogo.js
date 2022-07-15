import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function EditarJogo() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [gender, setGender] = useState();
  const [gender2, setGender2] = useState();
  const [gender3, setGender3] = useState();
  const [carousel, setCarousel] = useState();
  const [best, setBest] = useState();
  const [release, setRelease] = useState();
  const [isFree, setIsFree] = useState();
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

    api
      .get(`http://localhost:3000/games/${id}`)
      .then(({ data }) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setGender(data.gender[0]);
        setGender2(data.gender[1]);
        setGender3(data.gender[2]);
        setCarousel(data.carousel);
        setRelease(data.release);
        setIsFree(data.isFree);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleEditarJogo(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      price: parseInt(price, 10),
      gender: [gender, gender2, gender3],
      carousel,
      best,
      isFree,
      release,
    };

    api
      .patch("http://localhost:3000/games", data)
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
      <StyledForm onSubmit={handleEditarJogo}>
        <h1>Editar Jogo</h1>
        <StyledInput
          required
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <StyledButton type="submit">Editar jogo</StyledButton>
      </StyledForm>
      <MarginVert></MarginVert>
    </StyledContainer>
  );
}
