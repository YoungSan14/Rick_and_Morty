import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";

const DivStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & img{
        border-radius: 100%;
        object-fit: contain;
        border: 5px solid #BBEF55;
    }
`;

export default function Detail(){
    const [ chacter , setChacter ] = useState();
    const { idChacter } = useParams();

    useEffect(() => {
        fetch(`${URL}/character/${idChacter}?key=${KEY}`)
        .then((res) => res.json())
        .then((character) => {
            if(character.name){
                setChacter( character );
            }else{
                alert('No existe ese personaje');
            }
        })
        .catch((error) => console.log(error));
        return setChacter({});
    }, [idChacter]);

    return (
        <DivStyled>
            {
                console.log(chacter?.name)
            }
            {/* <img src={chacter.image} alt={chacter.name} /> */}
            <img src={chacter?.image} alt={chacter?.name} />
            <h1>{chacter?.name}</h1>
        </DivStyled>
    )
}