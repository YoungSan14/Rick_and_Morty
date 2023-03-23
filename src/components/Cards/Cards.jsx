import { CardsStyled } from './CardsStyled';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';


export default function Cards(props) {
   const { characters, onClose, onSearch, characterX } = props;

   return (
      <CardsStyled>
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