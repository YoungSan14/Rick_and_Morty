import styled from 'styled-components'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { GiBarbedStar } from 'react-icons/gi'
// GiPortal,
/* VERDE PORTAL > #BBEF55 #84E946 #D5EA49 #81D15E*/


const DivCard = styled.div`
   display: flex;
   flex-Direction: column;
   margin: 0 1rem 1rem;
   width: 18rem;
   position: relative;
   font-family: 'Press Start 2P'; 
   color: white;
   cursor: pointer;
   transition: visibility 0.8s linear 0.2s;
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
   .btn{
      border-radius: 100%;
      padding: 10px 13px;
      border: none;
      /* background-color: #81D15E; */
      transition: background-color 0.8s linear 0.2s;
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
   .exitBtn{
         background-color: #81D15E;
         position: absolute;
         top: 0;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   .favBtn{
      /* font-size: 2rem; */
      background-color: #D5EA49;
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
   }
   .favBtn:hover{
      color: #ef233c;
   }
   & img{
      z-index: 0;
      border-radius: 100%;
      object-fit: contain;
      transition: border-color 0.8s linear 0.2s;
      transition: opacity 0.8s linear 0.2s;
   }
`;

export default function Card({id, name, species, gender, image, onClose}) {

   const mouseHover = (e) => {
      const childrens = e.currentTarget.children;

      Object.entries(childrens).forEach( ([key , element]) => {
         if(element.classList.contains(`${style.hidden}`)){
            element.classList.remove(`${style.hidden}`);
            element.classList.add(`${style.visible}`)
         }else if (element.tagName === 'IMG') {
            element.classList.add(`${style.borderHover}`);
            element.classList.remove(`${style.border}`);
            element.classList.remove(`${style.opacity}`);
         }else if (element.classList.contains(`${style.nameSize}`)){
            element.classList.add(`${style.nameColor}`);
         }
      })
   }

   const mouseOut = (e) => {
      const childrens = e.currentTarget.children;
      Object.entries(childrens).forEach( ([key , element]) => {
         // console.log()
         if(element.tagName === 'DIV'){
            element.classList.remove(`${style.visible}`);
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



   return (
      <DivCard id={id} onMouseEnter={mouseHover} onMouseLeave={mouseOut}>
         <img  src={image} draggable='false' alt={name} className={`${style.border} ${style.opacity}`}/>
         <button className='btn exitBtn' onClick={onClose}>X</button>
         <button className='btn favBtn'><GiBarbedStar /></button>
         <Link to={`/detail/${id}`} className={style.nameSize}>
            <h2>{name}</h2>
         </Link>
         <div className={`${style.hidden} cardBody`}>
            <h2 className={style.otherSize}>{species}</h2>
            <h2 className={genderStyle(gender)}>{gender}</h2>
         </div>
      </DivCard>
   );
}


// const DivCard = styled.div`
//    display: flex;
//    flex-Direction: column;
//    margin: 0 1rem 1rem;
//    width: 18rem;
//    /* height: 18rem; */
//    position: relative;
//    font-family: 'Press Start 2P'; 
//    color: white;
//    cursor: pointer;
//    transition: visibility 0.8s linear 0.2s;
//    //tamaño celular
//    @media screen and (max-width: 1000px) {
//       width: 15rem;
//       & img{
//          width: 15rem;
//       }
//    }
//    .cardBody {
//       /* position: relative; */
//       display: flex; 
//       flex-direction: column;
//       /* align-items: flex-start; */
//    }
//    .cardButtons{
//       position: absolute;
//       visibility: visible;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       top: 0%;
//       bottom: 0%;
//       width: 100%;
//       height: 65%;
//       .btn{
//          cursor: pointer;
//          font-size: 1.4rem;
//          padding: 10px 13px;
//          border: none;
//          border-radius: 100%;
//          transition: background-color 0.8s linear 0.2s;
//          color: white;
//          &:hover{
//             border: 3px none #BBEF55;
//             background-color: #BBEF55;
//          }
//       }

//    }
//    & img{
//       z-index: 0;
//       border-radius: 100%;
//       object-fit: contain;
//       transition: border-color 0.8s linear 0.2s;
//       transition: opacity 0.8s linear 0.2s;
//    }
// `;