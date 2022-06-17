import React from "react";
import { StyledCabecalho, StyledLink, StyledSearch } from "../styles";
import ImgControle from "../assets/controle-de-video-game.png";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <>
      <StyledCabecalho>
        <div>
          <img src={ImgControle} alt="Logo" />

          <StyledSearch>
            <input type="text" placeholder="Buscar" name="search" />
            <button type="submit">
              <FaSearch />
            </button>
          </StyledSearch>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/">Explorar</StyledLink>
          <StyledLink to="/">Biblioteca</StyledLink>
        </div>

        <div>
          <StyledLink to="/">
            <FaShoppingCart />
          </StyledLink>
          <StyledLink to="/">
            <FaUser />
          </StyledLink>
        </div>
      </StyledCabecalho>
    </>
  );
}
