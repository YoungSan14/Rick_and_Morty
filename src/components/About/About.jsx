import React from "react";
import ImgAbout from "../../assets/foto-about-yngsan.jpg";
import styled from "styled-components";

const DivStyled = styled.div`
    width:20rem;
    position: relative;
    margin: 9rem 0 0 2rem;
    & img{
        height: 25rem;
        /* width: 20rem; */
        object-fit: contain;
        border-radius: 1288px;
        border: 5px solid #BBEF55;
    }
`

export default function About(){
    return (
        <DivStyled>
            <img src={ImgAbout} alt="img-creador" />
        </DivStyled>
    )
}