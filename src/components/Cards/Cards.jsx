import styled from 'styled-components';
import Card from '../Card/Card';
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
   & div{
      display: flex;
      align-content: space-around;
      justify-content: space-around;
      flex-wrap: wrap;
      @media screen and (max-width: 1280px){
         justify-content: space-evenly;
         /* justify-content: flex-start; */
      }
      //tamaño celular
      @media screen and (max-width: 767px) {
         justify-content: center;
      }
   }
`;

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <DivCards>
         <div className=''>
            {
               characters.map((o) => 
                  <Card 
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
