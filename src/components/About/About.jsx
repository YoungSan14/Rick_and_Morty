import React from "react";
import { AboutStyled } from "./AboutStyled";
import { Link } from "react-router-dom";
import ImgAbout from "../../assets/foto-about-yngsan.jpg";
import logoFreeCodeCamp from "../../assets/logos/FreeCodeCamp_logo.png"; 
import logoOpenBootCamp from "../../assets/logos/OpenBootCamp-logo.png";
import logoSoyHenry from "../../assets/logos/logo-henry.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function About(){
    return (
        <AboutStyled>
        <img className='foto' src={ImgAbout} alt='img-creador' draggable='false'/>
            <div>
                By: <h2>Santiago Martin Suarez</h2>
                <p>Este proyecto lo realice con todo lo aprendido de HTML, CSS, JavaScript y React, gracias a los cursos de:</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <img src={logoFreeCodeCamp} className='logos' alt='logo-freecodecamp' draggable='false'/>
                    <img src={logoOpenBootCamp} className='logos' alt='logo-openbotcamp' draggable='false'/>
                    <img src={logoSoyHenry} className='logos' alt='logo-soyhenry' draggable='false'/>
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
        </AboutStyled>
    )
}