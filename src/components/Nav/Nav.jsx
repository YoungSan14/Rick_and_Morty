import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
// import SearchBar from '../SearchBar/SearchBar';
import img from '../../assets/logorickandmorty.png'


const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Press Start 2P';
    width: 100vw;
    height: 5rem;
    z-index: 5; 
    position: fixed;
    top: 0;
    /* degrade del nav  */
    background: linear-gradient(to bottom, #040207, rgba(15,20,36,0));
    /* & div{
        position: absolute;
    } */
    .divOpciones{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 15px;
        /* position: relative; */
        .icon{
            visibility: hidden;
            position: absolute;
            color: white;
        }
        .opciones{
            margin: 0;
            color: white;
            font-size: .5rem;
            cursor: pointer;
            transition: color 0.3s linear 0.2s; 
            text-decoration: none;
            &:hover{
                color: #BBEF55;
            }
        }
    }
    .divImg{
        position: relative;
        height: 100%;
        & img{
            z-index: -1;
            height: 100%;
            opacity: 1;
            cursor: pointer;
        }
    }
    .divRelleno{
        position: relative;
        color: white;
        visibility: hidden;
        display: flex;
        width: 270px;
        /* margin-right: 15px; */
    }
    @media screen and (max-width: 1000px){
        /* flex-direction: row-reverse; */
        .divOpciones{
            visibility: hidden;
            position: absolute;
            .icon{
                visibility: visible;
                font-size: 2.5rem;
            }
        }
        .divImg{
            height: 80%;
        }
        .divRelleno{
            position: absolute;
        }
    }
    /* @media screen and (max-width: 1000px){
        justify-content: space-between;
        & h2{
            left: 60%;
        }
    } */
`;

export default function Nav({ onSearch, logout }){
    return (
        <NavStyled>
            <div className='divOpciones'>
                <FaBars className='icon'/>
                <NavLink to="/about" className='opciones'>
                    <h2>About</h2>
                </NavLink>
                <NavLink onClick={() => {logout()}} className='opciones'>
                    <h2>Logout</h2>
                </NavLink>
                <NavLink to="/favorites" className='opciones'>
                    <h2>Favoritos</h2>
                </NavLink>
            </div>
            <div className='divImg'>
                <NavLink to='/home' >
                    <img src={img} alt='logo-rick-and-morty' draggable='false'/>
                </NavLink>
            </div>
            <div className='divRelleno'></div>
        </NavStyled>
    )
}