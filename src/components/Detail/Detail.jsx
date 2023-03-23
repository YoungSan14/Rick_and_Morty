import React, { useState, useEffect } from 'react';
import { DetailStyled } from './DetailStyled';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";

export default function Detail(){
    const [ chacter , setChacter ] = useState({});
    const { idChacter } = useParams();

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
        <DetailStyled>
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
        </DetailStyled>
    )
}