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
   }
   & img{
      z-index: 0;
      border-radius: 100%;
      object-fit: contain;
      /* border-radius: 0 0 8px 8px; */
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

   return (
      <DivCard id={id} onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
         <img  src={image} draggable='false' alt={name} className={`${style.border} ${style.opacity}`}/>
         {/* <div>
         </div> */}
         <button onClick={onClose}>X</button>
         <h2 className={style.nameSize}>{name}</h2>
         <div className={`${style.hidden}`}>
            <h2 style={{fontSize: '1.2rem'}}>{species}</h2>
            <h2 
            style={{fontSize: '1.2rem'}}
            className={
               (gender === 'Male') ? `${style.male}` 
               : (gender === 'Female') ? `${style.female}` 
               : (gender === 'Genderless') ? `${style.genderless}` : `${style.unknown}`               
            } 
               >
                  {gender}
               </h2>
         </div>
      </DivCard>
   );
}
