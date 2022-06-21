import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import ItemBiblioteca from "../components/ItemBiblioteca";
import {
  StyledTitulo,
  StyledList,
  StyledContainer,
  MarginVert,
} from "../styles";
import api from "../services/api";

export default function Biblioteca() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    api
      .get(`http://localhost:3000/usuarios/${id}`)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
