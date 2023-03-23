import styled from 'styled-components';


export const DetailStyled = styled.div`
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