import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiStarFormation } from 'react-icons/gi';
import * as actions from '../../redux/actions';

const DivStyled = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Press Start 2P';
    gap: 1.5rem; 
    color: white;
    .cardsFiltros{
        position: relative;
        display: flex;
        justify-content: center;
        font-family: 'Segoe UI', 'Roboto';
        color: white;
        gap: .5rem;
        /* margin: 0 5px 0 5px; */
    }
    .cardsContainer{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
    .card{
        display: flex;
        flex-Direction: column;
        color: white;
        /* margin: 0 1rem 1rem; */
        width: 18rem;
        position: relative;
        z-index: 0;
        &:hover{
            .cardImg {
                border-color: #BBEF55;
            }
            .nameChacter{
                color: #BBEF55;
            }
            .cardButtons{
                .btnFavorite{
                    background-color: #81D15E;
                }
            }
        }
        .cardButtons{
            display: flex;
            justify-content: center;
            gap: 5px;
            position: absolute;
            top: 2%;
            z-index: 1;
            .btn{
                font-size: 1.2rem;
                border-radius: 10px;
                padding: 10px 10px 5px 10px;
                border: none;
                color: white;
                background-color: #A7B841;
                transition: background-color 0.8s linear 0.2s;
                &:hover{
                    .btnFavorite{
                        background-color: #BBEF55; 
                    }
                }
                .favorite{
                    color: #ffea00;
                    transition: color 0.8s linear 0.2s;
                    &:hover{
                        color: #ffaa00;
                    }
                }
            }
            .btnFavorite{
                transition: background-color 0.8s linear 0.2s;
                &:hover{
                    color: #ffaa00;
                    .favorite{
                        color: #ffaa00;
                    }
                }
            }
        }
        .cardImg{
            border-radius: 100%;
            object-fit: contain;
            border: 5px solid #D5EA49;
        }
        .nameChacter{
            /* margin-top: 10px; */
            transition: color 0.8s linear 0.2s;
            text-decoration: none;
            text-decoration-color: none;
            color: white;
        }
    }
`;

export default function Favorites(){
    const myFavorites = useSelector(state => state.myFavorites);
    const allFavorites = useSelector(state => state.allFavorites);
    const dispatch = useDispatch();

    const handleFavorite = (e) => {
        dispatch(actions.deleteFavorite(e.target.id));
    }

    const handleChange = (e) => {
        const nameSelect = e.target.name;
        const value = e.target.value;
        if(nameSelect === 'filterGender') dispatch(actions.filterCard(value));
        else if(nameSelect === 'order') dispatch(actions.orderCard(value));
    }

    return (
        <DivStyled>
            {
                (allFavorites.length !== 0) ? 
                    (<>
                        <div className="cardsFiltros">
                            Orden:
                            <select name="order" onChange={handleChange}>
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                            </select>
                            Filtro genero:
                            <select name="filterGender" onChange={handleChange}>
                                <option value="AllGender">Todos</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Genderless">Genderless</option>
                                <option value="unknown">unknown</option>
                            </select>
                        </div>
                        <div className="cardsContainer">
                            {
                            myFavorites.map((fav) => {
                            return (
                                <div className="card">
                                    <img src={fav.image} alt={fav.name} className="cardImg" draggable="false"/>
                                    <NavLink to={`/detail/${fav.id}`} className="nameChacter">
                                        <h2>{fav.name}</h2>
                                    </NavLink>
                                    <div className='cardButtons'>
                                        <button id={fav.id} onClick={handleFavorite} className='btn btnFavorite'>
                                            <GiStarFormation className='favorite'/>
                                        </button>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                    </>)
                :(
                    <h1 style={{position: 'relative'}}>No hay personajes Favoritos</h1>
                )
            }
        </DivStyled>
    )
}