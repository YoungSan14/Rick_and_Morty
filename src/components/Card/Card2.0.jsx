import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { GiStarFormation } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa'
import * as actions from '../../redux/actions';
/* VERDE PORTAL > #BBEF55 #84E946 #D5EA49 #81D15E*/

const DivStyled = styled.div`
    display: flex;
    flex-Direction: column;
    font-family: 'Press Start 2P'; 
    color: white;
    margin: 0 1rem 1rem;
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
            /* transition: visibility 0.8s linear 0.2s; */
            transition: visibility 1s linear 1s;
        }
        .cardButtons{
            .btn{
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
        /* &:hover{
            border: 5px solid #BBEF55;
            opacity: 1;
        } */
    }
    .nameChacter{
        font-size: 1rem;
        text-decoration: none;
        text-decoration-color: none;
        color: white;
        transition: color 0.8s linear 0.2s;
        /* &:hover{
            color: #BBEF55;
            .cardImg{
                border-color: #BBEF55;
                opacity: 1;
            }
        } */
    }
    .cardBody{
        display: flex; 
        flex-direction: column;
        align-items: start;
        font-size: 0.7rem;
        visibility: hidden;
    }
    .cardButtons{
        display: flex;
        justify-content: center;
        align-content: flex-end;
        gap: 5px;
        position: absolute;
        top: 2%;
        height: 310px;
        width: 100%;
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
                background-color: #BBEF55; 
            }
        }
        .btnFavorite{
            transition: color 0.8s linear 0.2s;
            &:hover{
                color: #ffaa00;
                .favorite{
                    color: #ffaa00;
                }
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
    .favorite{
        color: #ffea00;
        transition: color 0.8s linear 0.2s;
        &:hover{
            color: #ffaa00;
        }
    }
`;

export default function Card2({ id, name, species, gender, image, onClose }){
    const [ isFav, setFav ] = useState(false);
    const dispatch = useDispatch();
    const selector = useSelector(state => state.myFavorites);
    // const {id, name, species, gender, image} = chacter;

    const handleFavorite = () => {
        if(isFav){
            setFav(false);
            return dispatch(actions.deleteFavorite(id));
        }else{
            setFav(true);
            return dispatch(actions.addFavorite({id, name, species, gender, image}))
        }
        // console.log(selector.myFavorites)
    }

    // useEffect(() => {
    //     selector.myFavorites.forEach((fav) => {
    //     if (fav.id === id) {
    //         setFav(true);
    //     }
    //     });
    // }, []);

    const genderStyle = (gender) => {
        if(gender === 'Male') return 'male'
        if(gender === 'Female') return 'female' 
        if(gender === 'Genderless') return 'genderless' 
        if(gender === 'unknown') return 'unknown'
    }

    return (
        <DivStyled id={id}>
            <div className='cardButtons'>
                <button id={id} className='btn btnClose' onClick={onClose}>
                    <FaTimes/>
                </button>
                <button onClick={handleFavorite} className='btn btnFavorite'>
                    <GiStarFormation className={(isFav) ? 'favorite' : ''}/>
                </button>
            </div>
            <img src={image} alt={name} className='cardImg'/>
            <NavLink to={`/detail/${id}`} className='nameChacter'>
                <h2>{name}</h2>
            </NavLink>
            <div className='cardBody'>
                <h2>{species}</h2>
                <h2 className={genderStyle(gender)}>{gender}</h2>
            </div>
        </DivStyled>
    )
} 


// export default connect(mapDispatchToProps, null)(Card2);