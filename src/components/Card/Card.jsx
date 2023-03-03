import styled from 'styled-components'
import style from './Card.module.css'
/* VERDE PORTAL > #BBEF55 #84E946 #D5EA49 #81D15E*/

const DivCard = styled.div`
   display: flex;
   flex-Direction: column;
   margin: 1rem;
   width: 18rem;
   position: relative;
   font-family: 'Press Start 2P'; 
   color: white;
   cursor: pointer;
   //tamaño celular
   @media screen and (max-width: 1000px) {
      width: 15rem;
      & img{
         width: 15rem;
      }
   }
   & div {
      display: flex; 
      flex-direction: column;
   }
   & button{
      position: absolute;
      border-radius: 100%;
      left: 45%;
      bottom: 95%;
      padding: 10px 13px;
      border: none;
      background-color: #81D15E;
      color: white;
      font-size: 1.4rem;
      cursor: pointer;
      &:hover{
         border: 3px none #BBEF55;
         background-color: #BBEF55;
      }
      //tamaño celular
      @media screen and (max-width: 1000px){
         font-size: 1rem;
         left: 42.5%;
         bottom: 95%;  
      }
   }
   & img{
      z-index: 0;
      border-radius: 100%;
      object-fit: contain;
   }
`;


export default function Card({id, name, species, gender, image, onClose}) {

   const mouseHover = (e) => {
      const childrens = e.currentTarget.children;

      Object.entries(childrens).forEach( ([key , element]) => {
         if(element.classList.contains(`${style.hidden}`)){
            element.classList.remove(`${style.hidden}`);
         }else if (element.tagName === 'IMG') {
            element.classList.add(`${style.borderHover}`);
            element.classList.remove(`${style.border}`);
            element.classList.remove(`${style.opacity}`);
         }else if (element.classList.contains(`${style.nameSize}`)){
            element.classList.add(`${style.nameColor}`);
         }
      })
         // Card_hidden__Lshpu
   }

   const mouseOut = (e) => {
      const childrens = e.currentTarget.children;
      Object.entries(childrens).forEach( ([key , element]) => {
         // console.log()
         if(element.tagName === 'DIV'){
            element.classList.add(`${style.hidden}`);
         }else if (element.tagName === 'IMG') {
            element.classList.remove(`${style.borderHover}`);
            element.classList.add(`${style.border}`);
            element.classList.add(`${style.opacity}`);
         }else if (element.classList.contains(`${style.nameSize}`)){
            element.classList.remove(`${style.nameColor}`);
         }
      })
   }

   const genderStyle = (gender) => {
      if(gender === 'Male') return `${style.male} ${style.otherSize}`
      if(gender === 'Female') return `${style.female} ${style.otherSize}` 
      if(gender === 'Genderless') return `${style.genderless} ${style.otherSize}` 
      if(gender === 'unknown') return `${style.unknown} ${style.otherSize}`
   }

//    const speciesEmogis = (species) => {
//    if(species === 'Human') return `💪🏼${species}`
//    if(species === 'Alien') return `👽${species}`
//    if(species === 'Humanoid') return `👾${species}`
//    if(species === 'Poopybutthole') return `🌌${species}` 
//    // 'Human' 💪🏼
//    // 'Alien' 👽
//    // 'Humanoid' 👾
//    // 'Poopybutthole' 🌌
//    // 'Mythological' 🐉
//    // 'Unknown' 
//    // 'Animal' 🐻
//    // 'Disease' 🦠
//    // 'Robot' 🤖 🦾
//    // 'Cronenberg' 🧪
//    // 'Planet' 🪐
// }

   return (
      <DivCard id={id} onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
         <img  src={image} draggable='false' alt={name} className={`${style.border} ${style.opacity}`}/>
         {/* <div>
         </div> */}
         <button onClick={onClose}>X</button>
         <h2 className={style.nameSize}>{name}</h2>
         <div className={`${style.hidden}`}>
            <h2 className={style.otherSize}>{species}</h2>
            <h2 className={genderStyle(gender)}>{gender}</h2>
         </div>
      </DivCard>
   );
}
