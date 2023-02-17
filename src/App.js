import './App.css'
import React from 'react'
import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx'
// import imgBackground from './assets/logo-rick-and-morty.png'
// import characters from './data.js'



function App () {
  const [ characters , setCharacters ] = useState([]);

  const characterContain = (obj) => {
    const exist = characters.filter((c) => c.id === obj.id);
    if(exist.length === 0) return false;
    else return true;
  }

  const onSearch = (chacter) => {
    fetch(`https://rickandmortyapi.com/api/character/${chacter}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(characterContain(data))
      if (data.name) {
        if(!characterContain(data)){
          setCharacters((oldChars) => (
            [...oldChars, data]
          ));
        }else{
          window.alert(`${data.name} ya fue ingresado`);
        }
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (e) => {
    const cardId = e.target.parentNode.id;
    setCharacters(
      characters.filter((chacter) => chacter.id !== parseInt(cardId))
    );
  }

  return (
    <div className='App'>
      <BackgroundVideo />
        {/* <Route path='/' element={<Nav/>} /> */}
      {/* <Routes> */}
        <Nav onSearch={onSearch} />
      {/* </Routes> */}
        <div>
          <Cards characters={characters} onClose={onClose}/>
        </div>
    </div>
  )
}

export default App
