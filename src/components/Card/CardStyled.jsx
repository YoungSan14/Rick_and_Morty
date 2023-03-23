import styled from "styled-components";

export const CardStyled = styled.div`
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