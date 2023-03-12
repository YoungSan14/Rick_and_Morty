import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";

const DivStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    font-family: 'Press Start 2P';
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
                    <h1 style={{color: 'white'}}>Cargando...</h1>
                </>
            )
            }
        </DivStyled>
    )
}



    // {/* console.log(chacter?.name) */}

