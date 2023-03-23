import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import SearchBar from '../SearchBar/SearchBar';
import img from "../../assets/logorickandmorty.png";
import { NavStyled } from "./NavStyled"



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
