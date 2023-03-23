import React, { useState , useEffect } from 'react';
import { CardStyled } from './CardStyled'
import { NavLink } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { GiStarFormation } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa'
import * as actions from '../../redux/actions';
/* VERDE PORTAL > #BBEF55 #84E946 #D5EA49 #81D15E*/

// Hacer una funcion qu en el nombre muestre un total de 15 (18 o 20 tambien) caracteres. Si el nombre tiene mas de 15, que muestre 15 caracteres y que agregue tres puntos al final (...) 

export default function Card({ id, name, species, gender, image, onClose }){
    const [ isFav, setFav ] = useState(false);
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    // const {id, name, species, gender, image} = chacter;

    const handleFavorite = () => {
        // console.log(selector)
        if(isFav){
            setFav(false);
            return dispatch(actions.deleteFavorite(id));
        }else{
            setFav(true);
            return dispatch(actions.addFavorite({id, name, species, gender, image}))
        }
    }

    useEffect(() => {
        const containChacter = myFavorites.filter((fav) => fav.id === id)
        if(containChacter.length === 1) setFav(true);
    }, [myFavorites, id])

    const genderStyle = (gender) => {
        if(gender === 'Male') return 'male'
        if(gender === 'Female') return 'female' 
        if(gender === 'Genderless') return 'genderless' 
        if(gender === 'unknown') return 'unknown'
    }

    const nameCaracters = (name) => {
        let longitud = 15;
        let nameArr = name.split('');
        if(name.length === longitud || name.length < longitud){ 
            return name;
        }else if(name === "Mythological Creature"){
            nameArr.splice(longitud-4, nameArr.length, '...');
            return nameArr.join('');
        }else if(name.length > longitud){
            nameArr.splice(longitud-2, nameArr.length, '...');
            return nameArr.join('');
        }
    }

    return (
        <CardStyled id={id}>
            <div className='cardButtons'>
                <button id={id} className='btn btnClose' onClick={onClose}>
                    <FaTimes/>
                </button>
                <button onClick={handleFavorite} className='btn btnFavorite'>
                    <GiStarFormation className={(isFav) && 'favorite'}/>
                </button>
            </div>
            <img src={image} alt={name} className='cardImg' draggable='false' />
            <NavLink to={`/detail/${id}`} className='nameChacter'>
                <h2>{nameCaracters(name)}</h2>
            </NavLink>
            <div className='cardBody'>
                <h2>{nameCaracters(species)}</h2>
                <h2 className={genderStyle(gender)}>{gender}</h2>
            </div>
        </CardStyled>
    )
} 