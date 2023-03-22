import styled from 'styled-components';
// import Card from '../Card/Card';
import Card2 from '../Card/Card2.0';
import SearchBar from '../SearchBar/SearchBar';


const DivCards = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   top: 0;
   right: 0;
   left: 0;
   margin-top: 10rem;
   color: white;
   h1{
      font-family: 'Press Start 2P';
   }
   .btn-search-Container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 1rem;
      font-family: 'Segoe UI', 'Roboto';
      .btnContainer{
         margin: .5rem;
      }
      .searchContainer{
         margin: .5rem;
      }
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
   .cardsContainer{
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
   const { characters, onClose, onSearch, characterX } = props;

   return (
      <DivCards>
         <h1>Ingresa Personajes de Rick & Morty</h1>
         <div className="btn-search-Container">
            <span>Agregar Aleatoriamente:</span>
            <div className="btnContainer">
               <button className='btn' onClick={() => {characterX(2)}}>x2</button> 
               <button className='btn' onClick={() => {characterX(4)}}>x4</button>
               <button className='btn' onClick={() => {characterX(8)}}>x8</button>
            </div>
            <span>Buscar por ID:</span>
            <div className="searchContainer">
               <SearchBar onSearch={onSearch}/>
            </div>
         </div>
         <div className='cardsContainer'>
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
