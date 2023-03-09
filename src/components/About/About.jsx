import React from "react";
import { Link } from "react-router-dom";
import ImgAbout from "../../assets/foto-about-yngsan.jpg";
import styled from "styled-components";
import logoFreeCodeCamp from "../../assets/logos/FreeCodeCamp_logo.png"; 
import logoOpenBootCamp from "../../assets/logos/OpenBootCamp-logo.png";
import logoSoyHenry from "../../assets/logos/logo-henry.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const DivStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    position: relative;
    font-family: 'Press Start 2P'; 
    overflow-x: hidden;
    .foto{
        height: 25rem;
        margin: 15px;
        object-fit: contain;
        border-radius: 1288px;
        border: 5px solid #BBEF55;
    }
    & h2{
        font-size: 1.5rem;
        color: #BBEF55;
    }
    & div{
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
    }
    .logos{
        width: 10rem;
        object-fit: contain;
    }
    .cuentas{
        color: #BBEF55;
    }
    .icons{
        font-size: 3rem;
        /* color: white; */
        cursor: pointer;
        transition: color 0.8s linear 0.2s;
        &:hover{
            color: #BBEF55;
        }
    }
    /* @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    } */
`

export default function About(){
    return (
        <DivStyled>
        <img className='foto' src={ImgAbout} alt="img-creador" />
            <div>
                By: <h2>Santiago Martin Suarez</h2>
                <p>Este proyecto lo realice con todo lo aprendido de HTML, CSS, JavaScript y React, gracias a los cursos de:</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <img src={logoFreeCodeCamp} className='logos' alt='logo-freecodecamp'/>
                    <img src={logoOpenBootCamp} className='logos' alt='logo-openbotcamp'/>
                    <img src={logoSoyHenry} className='logos' alt='logo-soyhenry'/>
                </div>
                <div>
                    <p>Cuenta de Linkedin</p>
                    <Link to='https://www.linkedin.com/in/santiago-martin-suarez-aa520b236/' target='_blank'>
                        <FaLinkedin className='icons'/>
                    </Link>
                    <p>Cuenta de GitHub</p>
                    <Link to='https://www.github.com/YoungSan14' target='_blank'>
                        <FaGithub className='icons'/>
                    </Link>               
                </div>
            </div>
        </DivStyled>
    )
}