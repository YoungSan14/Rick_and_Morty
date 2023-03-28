import styled from 'styled-components';


export const FavoritesStyled = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Press Start 2P';
    gap: 1.5rem; 
    color: white;
    .title{
        position: relative;
        padding: .5rem;
        color: #BBEF55;
    }
    .cardsFiltros{
        position: relative;
        display: flex;
        justify-content: center;
        font-family: 'Segoe UI', 'Roboto';
        color: white;
        gap: .5rem;
        /* margin: 0 5px 0 5px; */
    }
    .cardsContainer{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
    .card{
        display: flex;
        flex-Direction: column;
        color: white;
        /* margin: 0 1rem 1rem; */
        width: 18rem;
        position: relative;
        z-index: 0;
        &:hover{
            .cardImg {
                border-color: #BBEF55;
            }
            .nameChacter{
                color: #BBEF55;
            }
            .cardButtons{
                .btnFavorite{
                    background-color: #81D15E;
                }
            }
        }
        .cardButtons{
            display: flex;
            justify-content: center;
            gap: 5px;
            position: absolute;
            top: 2%;
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
                    .btnFavorite{
                        background-color: #BBEF55; 
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
            .btnFavorite{
                transition: background-color 0.8s linear 0.2s;
                &:hover{
                    color: #ffaa00;
                    .favorite{
                        color: #ffaa00;
                    }
                }
            }
        }
        .cardImg{
            border-radius: 100%;
            object-fit: contain;
            border: 5px solid #D5EA49;
        }
        .nameChacter{
            /* margin-top: 10px; */
            transition: color 0.8s linear 0.2s;
            text-decoration: none;
            text-decoration-color: none;
            color: white;
        }
    }
    .cardsFiltros{
        select{
	        appearance: none;
	        -webkit-appearance: none;
	        -moz-appearance: none;
            border-radius: 5px; 
            background: linear-gradient(#040207, rgba(15,20,36,0.5));
            color: white;
            outline-color: #BBEF55;
            option{
                background-color: black;
            }
        }
    }
`;