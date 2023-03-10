import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import img from '../../assets/logorickandmorty.png'


const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Press Start 2P';
    width: 100vw;
    height: 5rem;
    position: fixed;
    top: 0;
    /* degrade del nav  */
    background: linear-gradient(to bottom, #040207, rgba(15,20,36,0));
    z-index: 5; 
    & div{
        position: absolute;
    }
    & div{
        height: 100%;
    }
    & img{
        z-index: -1;
        height: 100%;
        opacity: 1;
        cursor: pointer;
    }
    & h2{
        display: flex;
        align-items: center;
        margin: 0;
        color: white;
        font-size: 0.8rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 2%;
        cursor: pointer;
        transition: color 0.5s linear 0.2s; 
        &:hover{
            color: #BBEF55;
        }
    }
    @media screen and (max-width: 1000px){
        justify-content: space-between;
        & h2{
            left: 60%;
        }
    }
`;

export default function Nav({ onSearch }){
    const location = useLocation();

    return (
        <NavStyled>
            <NavLink to="/about" >
                <h2>About</h2>
            </NavLink>
            <div className='divImg'>
                <NavLink to='/home' >
                    <img src={img} alt='logo-rick-and-morty' draggable='false'/>
                </NavLink>
            </div>
            {
                (location.pathname === '/home') && <SearchBar onSearch={onSearch}/>
            }
        </NavStyled>
    )
}