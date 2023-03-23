import React from 'react';
import { FavoritesStyled } from './FavoritesStyled';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GiStarFormation } from 'react-icons/gi';
import * as actions from '../../redux/actions';


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
        <FavoritesStyled>
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
                                <option value="Male" style={{color: '#74C2E7'}}>Male</option>
                                <option value="Female" style={{color: '#AB73A1'}}>Female</option>
                                <option value="Genderless" style={{color: '#6E8774'}}>Genderless</option>
                                <option value="unknown" style={{color: '#ef233c'}}>unknown</option>
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
        </FavoritesStyled>
    )
}