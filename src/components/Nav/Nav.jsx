import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
// import SearchBar from '../SearchBar/SearchBar';
import img from "../../assets/logorickandmorty.png";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Press Start 2P";
  width: 100vw;
  height: 5rem;
  z-index: 5;
  position: fixed;
  top: 0;
  /* degrade del nav  */
  background: linear-gradient(
      to top,
      rgba(13, 17, 31, 0.9) 0%,
      rgba(18, 26, 46, 0.9) 20%,
      rgba(23, 33, 62, 0.9) 40%,
      rgba(29, 41, 79, 0.9) 60%,
      rgba(36, 49, 96, 0.9) 80%
    ),
    radial-gradient(circle, #040207, rgba(15, 20, 36, 0) 70%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .icon {
    visibility: hidden;
    position: absolute;
    color: white;
  }
  .divOpciones {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 15px;
    /* position: relative; */
    .opciones {
      margin: 0;
      color: white;
      font-size: 0.5rem;
      cursor: pointer;
      transition: color 0.3s linear 0.2s;
      text-decoration: none;
      &:hover {
        color: #bbef55;
      }
    }
  }
  .divImg {
    position: relative;
    height: 100%;
    & img {
      z-index: -1;
      height: 100%;
      opacity: 1;
      cursor: pointer;
    }
  }
  .divRelleno {
    position: relative;
    color: white;
    visibility: hidden;
    display: flex;
    width: 270px;
    /* margin-right: 15px; */
  }
  @media screen and (max-width: 1000px) {
    flex-direction: row-reverse;
    .icon {
      color: white;
      visibility: visible;
      position: absolute;
      right: 5%;
      font-size: 2.5rem;
      transition: color 0.2s linear 0.2s;
      &:hover {
        color: #bbef55;
        ~ .divOpciones {
          visibility: visible;
        }
      }
    }
    .active {
      color: #bbef55;
    }
    .divOpciones {
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      transition: visibility 0.4s linear 0.2s;
      visibility: hidden;
      top: 100%;
      padding: 1rem 2.5rem 1rem 1rem;
      right: 0%;
      background-image: linear-gradient(
        to top,
        rgba(36, 49, 96, 0.9),
        rgba(29, 41, 79, 0.9),
        rgba(23, 33, 62, 0.9),
        rgba(18, 26, 46, 0.9),
        rgba(13, 17, 31, 0.9)
      );
      /* background-position: bottom center; */
      z-index: 6;
      &:hover {
        visibility: visible;
      }
    }
    .divImg {
      height: 80%;
      position: absolute;
      left: 4%;
    }
  }
`;

export default function Nav({ onSearch, logout }) {
  const onOptions = (e) => {
    let icono = e.target.previousSibling;
    icono.classList.add("active");
  };
  const leaveOptions = (e) => {
    let icono = e.target.previousSibling;
    icono.classList.remove("active");
    console.log(icono.classList);
  };
  return (
    <NavStyled>
      <FaBars className="icon" />
      <div
        className="divOpciones"
        onMouseEnter={onOptions}
        onMouseLeave={leaveOptions}
      >
        <NavLink to="/favorites" className="opciones">
          <h2>Favoritos</h2>
        </NavLink>
        <NavLink to="/about" className="opciones">
          <h2>About</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            logout();
          }}
          className="opciones"
        >
          <h2>Logout</h2>
        </NavLink>
      </div>
      <div className="divImg">
        <NavLink to="/home">
          <img src={img} alt="logo-rick-and-morty" draggable="false" />
        </NavLink>
      </div>
      <div className="divRelleno"></div>
    </NavStyled>
  );
}
