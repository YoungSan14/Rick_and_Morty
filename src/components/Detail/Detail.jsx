import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";

const DivStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* margin-top: 9rem; */
    font-family: 'Press Start 2P';
    z-index: 0;
    .msjLoad{
        color: white;
        position: relative;
    }
    & img{
        border-radius: 100%;
        object-fit: contain;
        border: 5px solid #BBEF55;
    }
    .info{
        display: flex;
        flex-direction: column;
        color: white;
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
    @media screen and (max-width: 850px){
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
        /* align-content: flex-end; */
        /* justify-content: center; */
        img{
            /* align-self: flex-end; */
            width: 250px;
        }
        .info{
            /* align-self: flex-start; */
            font-size: .8rem;
            margin: 0;
            padding: 0;
        }
        .msjLoad{
            color: white;
            position: relative;
            align-content: center;
        }
    }
`;

export default function Detail(){
    const [ chacter , setChacter ] = useState({});
    const { idChacter } = useParams();

    // useEffect(() => {
    //     fetch(`${URL}/character/${idChacter}?key=${KEY}`)
    //     .then((res) => res.json())
    //     .then((character) => {
    //         if(character.name){
    //             setChacter( character );
    //         }else{
    //             alert('No existe ese personaje');
    //         }
    //     })
    //     .catch((error) => console.log(error));
    //     return setChacter({});
    // }, [idChacter]);
    useEffect(() => {
        axios(`${URL}/character/${idChacter}?key=${KEY}`)
        .then((res) => setChacter(res.data))
    }, [idChacter]);

    const genderStyle = (gender) => {
        if(gender === 'Male') return 'male'
        if(gender === 'Female') return 'female' 
        if(gender === 'Genderless') return 'genderless' 
        if(gender === 'unknown') return 'unknown'
    }

    const originStyle = (origin) => {
        if(origin === 'unknown') return 'unknown'
    }

    return (
        <DivStyled>
            {           
            (chacter.name) ? (
                <>
                    <img src={chacter.image} alt={chacter.name} />
                    <div className='info'>
                        <h1 style={{color: '#BBEF55'}}>{chacter.name}</h1>
                        Genero:<h2 className={genderStyle(chacter.gender)}>{chacter.gender}</h2>  
                        Especie:<h2>{chacter.species}</h2>
                        Origen:<h2 className={originStyle(chacter.origin?.name)}>{chacter.origin?.name}</h2>
                    </div>
                </>
            )
            : (
                <>
                    <h1 className='msjLoad'>Cargando...</h1>
                </>
            )
            }
        </DivStyled>
    )
}