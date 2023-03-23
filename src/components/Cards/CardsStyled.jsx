import styled from "styled-components";

export const CardsStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  top: 0;
  right: 0;
  left: 0;
  margin-top: 10rem;
  color: white;
  h1 {
    font-family: "Press Start 2P";
  }
  .btn-search-Container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1rem;
    font-family: "Segoe UI", "Roboto";
    .btnContainer {
      margin: 0.5rem;
    }
    .searchContainer {
      margin: 0.5rem;
    }
    .btn {
      margin: 0 5px 0 5px;
      height: 1.7rem;
      border-radius: 10px;
      border: none;
      padding: 0 10px 0 10px;
      background-color: #81d15e;
      transition: background-color 0.5s linear 0.2s;
      color: white;
      font-size: 1rem;
      font-weight: 700;
      &:hover {
        background-color: #bbef55;
      }
    }
  }
  .cardsContainer {
    display: flex;
    align-content: space-around;
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 1280px) {
      justify-content: space-evenly;
    }
    //tamaño celular
    @media screen and (max-width: 767px) {
      justify-content: center;
    }
  }
`;