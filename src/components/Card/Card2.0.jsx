import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { GiStarFormation } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa'
import * as actions from '../../redux/actions';
/* VERDE PORTAL > #BBEF55 #84E946 #D5EA49 #81D15E*/

// Hacer una funcion qu en el nombre muestre un total de 15 (18 o 20 tambien) caracteres. Si el nombre tiene mas de 15, que muestre 15 caracteres y que agregue tres puntos al final (...) 

const DivStyled = styled.div`
    display: flex;
    flex-Direction: column;
    font-family: 'Press Start 2P'; 
    color: white;
    margin: 0 1rem 1rem 1rem;
    width: 18rem;
    position: relative;
    &:hover{
        .cardImg {
            border-color: #BBEF55;
            opacity: 1;
        }
        .nameChacter{
            color: #BBEF55;
        }
        .cardBody{
            visibility: visible;
            transition: visibility 1s linear 1s;
        }
        .cardButtons{
            .btnClose{
                background-color: #9b2226;
            }
            .btnFavorite{
                background-color: #81D15E;
            }
        }
    }
    .cardImg{
        border-radius: 100%;
        object-fit: contain;
        border: 5px solid #D5EA49;
        opacity: 0.7;
        transition: border-color 0.8s linear 0.2s;
        transition: opacity 0.8s linear 0.2s;
        z-index: 0;
    }
    .nameChacter{
        font-size: 1rem;
        height: 65px;
        /* width: 100%; */
        text-decoration: none;
        text-decoration-color: none;
        color: white;
        transition: color 0.8s linear 0.2s;
        /* margin-top: 5px; */
        padding: 0;
    }
    /* .nameChacter{
        transition: color 0.8s linear 0.2s;
        text-decoration: none;
        text-decoration-color: none;
        color: white;
    } */
    .cardBody{
        display: flex; 
        flex-direction: column;
        align-items: center;
        font-size: 0.7rem;
        visibility: hidden;
    }
    .cardButtons{
        display: flex;
        justify-content: center;
        gap: 5px;
        position: absolute;
        bottom: 32%;
        width: 100%;
        /* height: 80%; */
        z-index: 1;
        .btn{
            font-size: 1.2rem;
            border-radius: 10px;
            padding: 10px 10px 5px 10px;
            border: none;
            color: white;
            background-color: #A7B841;
            &:hover{
                .btnFavorite{
                    background-color: #BBEF55; 
                }
                .btnClose{
                    background-color: #ae2012;
                }
            }
        }
        .btnClose{
            transition: background-color 0.8s linear 0.2s;
            &:hover{
                background-color: #ae2012;
            }
        }
        .btnFavorite{
            /* transition: background-color 0.8s linear 0.2s; */
            transition: color 0.8s linear 0.2s;
            &:hover{
                color: #ffaa00;
                .favorite{
                    color: #ffaa00;
                }
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
    .male{
        color: #74C2E7;
    }
    .female{
        color: #AB73A1;
    }
    .genderless{
        color: #6E8774;
    }
    .unknown{
        color: #ef233c;
    }
`;

export default function Card2({ id, name, species, gender, image, onClose }){
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
        if(name.length === longitud || name.length < longitud){ 
            return name;
        }else if(name.length > longitud){
            let strArr = name.split('');
            strArr.splice(longitud-2, strArr.length, '...');
            return strArr.join('');
        }
    }

    return (
        <DivStyled id={id}>
            <div className='cardButtons'>
                <button id={id} className='btn btnClose' onClick={onClose}>
                    <FaTimes/>
                </button>
                <button onClick={handleFavorite} className='btn btnFavorite'>
                    <GiStarFormation className={(isFav) && 'favorite'}/>
                </button>
            </div>
            <img src={image} alt={name} className='cardImg'/>
            <NavLink to={`/detail/${id}`} className='nameChacter'>
                <h2>{nameCaracters(name)}</h2>
            </NavLink>
            <div className='cardBody'>
                <h2>{nameCaracters(species)}</h2>
                <h2 className={genderStyle(gender)}>{gender}</h2>
            </div>
        </DivStyled>
    )
} 


// export default connect(mapDispatchToProps, null)(Card2);

    // const favoriteContain = () => {
    //     if(isFav){
    //         const contain = selector.myFavorites.find((fav) => fav.id === id);
    //         if (contain !== 'undefined') {
    //             return true;
    //         }else{ 
    //             return false;
    //         }
    //     }else{
    //         return false;
    //     }
    // }

    // const favoriteStyle = () => {
    //     if(favoriteContain(selector)) return 'favorite' 
    //     else return ''
    // }