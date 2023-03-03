import React from 'react'
import { NavLink } from 'react-router-dom'
// import About from '../About/About'
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import img from '../../assets/logorickandmorty.png'

const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
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
    @media screen and (max-width: 1000px){
        justify-content: space-between;
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
`;

export default function Nav(props){
    return (
        <NavStyled>
            {/* <NavLink to='/about'>  */}
                {/* <About /> */}
                {/* <h2>About</h2> */}
            {/* </NavLink> */}
            <div>
                <NavLink to='/' >
                    <img src={img} alt='logo-rick-and-morty' />
                </NavLink>
            </div>
            <SearchBar onSearch={props.onSearch}/>
        </NavStyled>
    )
}