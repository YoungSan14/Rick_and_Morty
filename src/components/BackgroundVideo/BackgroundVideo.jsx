import React from 'react'
import styled from './BackgroundVideo.module.css'
import video from '../../assets/Estrellas.mp4'
// import img from '../../assets/logorickandmorty.png'
// import video from '../../assets/Galaxia.mp4'
// RUTA LOCAL -> ../../assets/Estrellas.mp4
//URL VIDEO -> https://cdn.pixabay.com/vimeo/685694725/Estrellas%20-%20109821.mp4?width=1920&expiry=1676088874&hash=897c3ad6c50f2c035a44a3852aed7dc3062f6666

export default function BackgroundVideo(){
    return (
        <>
            <video className={styled.styleVideo} playsInline autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        </>
    )
}