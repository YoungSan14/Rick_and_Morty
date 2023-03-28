import styled from "styled-components";
import img from "../../assets/peace-among-worlds.png"

const NotFoundStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white;
    overflow-x: hidden;
    font-family: 'Press Start 2P';
    font-size: .7rem;
    h1{
        margin-bottom: 5rem;
    }
    .imgContainer{
        display: flex;
        img{
            object-fit: cover;
        }
    }
`;

export default function NotFound (){
    return (
        <NotFoundStyled>
            <h1>ERROR NO EXISTE PAGINA</h1>
            <h2>Peace Among Worlds</h2>
            <div className="imgContainer">
                <img src={img} alt="peace-among-worlds" draggable="false"/>
            </div>
        </NotFoundStyled>
    )
}