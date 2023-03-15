import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { TiThMenuOutline } from 'react-icons/ti';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
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
    .divOps{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 15px;
        /* position: relative; */
        & h2{
            margin: 0;
            color: white;
            font-size: 0.8rem;
            cursor: pointer;
            transition: color 0.3s linear 0.2s; 
            &:hover{
                color: #BBEF55;
            }
            /* position: absolute;
            top: 0;
            bottom: 0;
            left: 2%; */
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
    .divSearch{
        position: relative;
        display: flex;
        justify-content: space-evenly;
        width: 270px;
        margin-right: 15px;
    }
    @media screen and (max-width: 900px){
        .divSearch{
            justify-content: flex-end;
            input{
                width: 50%;
            }
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
    const location = useLocation();

    return (
        <NavStyled>
            <div className='divOps'>
                <NavLink to="/about" style={{textDecoration: 'none'}}>
                    <h2>About</h2>
                </NavLink>
                <NavLink onClick={() => {logout()}} style={{textDecoration: 'none'}}>
                    <h2>Logout</h2>
                </NavLink>
            </div>
            <div className='divImg'>
                <NavLink to='/home' >
                    <img src={img} alt='logo-rick-and-morty' draggable='false'/>
                </NavLink>
            </div>
            <div className='divSearch'>
                {
                    (location.pathname === '/home') && <SearchBar onSearch={onSearch}/>
                }
            </div>
        </NavStyled>
    )
}