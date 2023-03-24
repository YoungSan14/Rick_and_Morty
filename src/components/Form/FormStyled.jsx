import styled from "styled-components";


export const FormStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    height: 100vh;
    width: 100vw;
    color: white;
    .btn{
        align-self: center;
        padding: 10px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: #81D15E;
        transition: background-color 0.5s linear 0.2s;
        font-weight: 700;
        color: white;
        &:hover{
            background-color: #BBEF55;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: start;
        border-radius: 20px;
        padding: 2rem 5rem 2rem 5rem;
        background-image: radial-gradient(circle, rgba(36, 49, 96, 0.9), rgba(29, 41, 79, 0.9), rgba(23, 33, 62, 0.9), rgba(18, 26, 46, 0.9), rgba(13, 17, 31, 0.9));
        /* background-image: linear-gradient(to top, rgba(187, 239, 85, 0.9), rgba(0, 189, 127, 0.9), rgba(0, 129, 137, 0.9), rgba(0, 69, 98, 0.9), rgba(13, 17, 31, 0.9)); */
        h2{
            /* margin-top: 1rem; */
            /* font-family: 'Press Start 2P';
            font-size: .9rem; */
            margin-bottom: 1rem;
        }
        label{
            margin-top: .5rem;
            /* padding-bottom: 1rem; */
        }
        input{
            height: 1.7rem;
            padding-left: 10px;
            background: linear-gradient(#040207, rgba(15,20,36,0.5));
            border-radius: 10px;
            border: 1px solid white;
            color: white;
            outline: none;
        }
        .base{
            border: 1px solid white;
        }
        .valid{
            border: 2px solid #BBEF55;
        }
        .invalid{
            border: 2px solid #ef233c;
        }
    }
`;