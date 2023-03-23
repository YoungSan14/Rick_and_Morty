import styled from "styled-components";

export const AboutStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    position: relative;
    font-family: 'Press Start 2P'; 
    overflow-x: hidden;
    .foto{
        height: 25rem;
        margin: 15px;
        object-fit: contain;
        border-radius: 1288px;
        border: 5px solid #BBEF55;
    }
    & h2{
        font-size: 1.5rem;
        color: #BBEF55;
    }
    & div{
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
    }
    .logos{
        width: 10rem;
        object-fit: contain;
    }
    .cuentas{
        color: #BBEF55;
    }
    .icons{
        font-size: 3rem;
        /* color: white; */
        cursor: pointer;
        transition: color 0.8s linear 0.2s;
        &:hover{
            color: #BBEF55;
        }
    }`