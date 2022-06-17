import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  background-color: #272650;
  color: white;
  border: none;
}
`;

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background: none;
  margin: 10px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledCabecalho = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin: 20px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 5px 20px;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  margin: auto 20px auto 2px;
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  padding: 13px;
  height: 12px;

  input {
    font-weight: 600;
    background: none;
  }

  button {
    margin: 7px;
  }
`;

export const StyledDestaque = styled.div`
  width: 90%;
  height: 500px;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    rgba(178, 173, 210, 0.29) 0%,
    rgba(191, 182, 252, 0) 100%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
  display: flex;

  img {
    height: 100%;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  button {
    width: 50%;
    background: linear-gradient(180deg, #005eda 0%, #9100a9 138%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);
    border-radius: 56px;
  }

  p {
    color: white;
  }
`;

export const StyledConteudo = styled.div`
  margin: 100px 10px;
`;

export const StyledGeneros = styled.div`
  display: flex;
  width: 10px;
`;

export const StyledCategoria = styled.div`
  padding: 5px;
  margin: 10px;
  background: linear-gradient(
    180deg,
    #9a5bff 0%,
    #62006f 137.99%,
    #f800ee 138%
  );
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  border-radius: 40.2395px;
`;

export const StyledCardGame = styled.div`
  min-width: 660px;
  height: 360px;
  margin: 10px auto;

  background: linear-gradient(
    180deg,
    rgba(178, 173, 210, 0.29) 0%,
    rgba(191, 182, 252, 0) 100%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
  display: flex;

  img {
    height: 100%;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  button {
    width: 50%;
    background: linear-gradient(180deg, #005eda 0%, #9100a9 138%);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.125);
    border-radius: 56px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const StyledForm = styled.div`
  margin: 0 auto;
  width: 50%;
  border-radius: 5px;
  text-align: center;

  h1 {
    margin: 50px auto 20px;
  }

  p {
    margin: 100px auto 15px;
  }
`;

export const StyledProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 500px;
  margin: 30px auto;
`;

export const StyledInput = styled.input`
  background: #0b0339;
  box-shadow: 0px 2.87425px 2.87425px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.87425px);

  color: white;
  height: 25px;
  width: 80%;
  padding: 5px 0px 5px 15px;
  font-weight: 600;
  border-radius: 100px;
  margin: 7px auto;
`;

export const StyledButton = styled.button`
  background: #0b0339;

  font-size: 17px;
  margin: 10px 2%;
  padding: 0.6em 2em;
  border: 0;
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  transition: 0.5s;

  &:hover {
    background: ;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
