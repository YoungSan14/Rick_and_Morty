import { CardsStyled } from './CardsStyled';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
// import { useEffect } from 'react';


export default function Cards({ characters, onClose, onSearch, addCharacterX }) {
   // useEffect(() => {},[])

   return (
      <CardsStyled>
         <h1>Ingresa Personajes de Rick & Morty</h1>
         <div className="btn-search-Container">
            <span>Agregar Aleatoriamente:</span>
            <div className="btnContainer">
               <button className='btn' onClick={() => {addCharacterX(2)}}>x2</button> 
               <button className='btn' onClick={() => {addCharacterX(4)}}>x4</button>
               <button className='btn' onClick={() => {addCharacterX(8)}}>x8</button>
            </div>
            <span>Buscar por ID:</span>
            <div className="searchContainer">
               <SearchBar onSearch={onSearch}/>
            </div>
         </div>
         <div className='cardsContainer'>
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
      </CardsStyled>
   );
}