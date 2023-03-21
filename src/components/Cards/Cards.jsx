import styled from 'styled-components';
// import Card from '../Card/Card';
import Card2 from '../Card/Card2.0';

// import { Route } from 'react-router-dom';

const DivCards = styled.div`
   /* margin: 10rem; */
   /* display: flex; */
   /* flex-direction: row; */
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   margin-top: 10rem;
   .cardsButtons{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      color: white;
      font-family: 'Press Start 2P';
      .btn{
         margin: 0 5px 0 5px;
         height: 1.7rem;
         border-radius: 10px;
         border: none;
         padding: 0 10px 0 10px;
         background-color: #81D15E;
         transition: background-color 0.5s linear 0.2s;
         color: white;
         font-size: 1rem;
         font-weight: 700;
         &:hover{
            background-color: #BBEF55;;
         }
      }
   }
   & div{
      display: flex;
      align-content: space-around;
      justify-content: space-around;
      flex-wrap: wrap;
      @media screen and (max-width: 1280px){
         justify-content: space-evenly;
      }
      //tamaño celular
      @media screen and (max-width: 767px) {
         justify-content: center;
      }
   }
`;

export default function Cards(props) {
   const { characters, onClose, characterX } = props;

   return (
      <DivCards>
         <div className="cardsButtons">
            Agregar personajes Aleatoriamente:
            <button className='btn' onClick={() => {characterX(2)}}>x2</button> 
            <button className='btn' onClick={() => {characterX(4)}}>x4</button>
            <button className='btn' onClick={() => {characterX(8)}}>x8</button>
         </div>
         <div className=''>
            {
               characters.map((o) => 
                  <Card2 
                     id={o.id}
                     name={o.name}
                     species={o.species}
                     gender={o.gender}
                     image={o.image}
                     onClose={onClose}
                     key={o.id}
                  />
               )
            }
         </div>
      </DivCards>
   );
}
