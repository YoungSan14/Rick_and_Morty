import './App.css'
import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx'
// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'




function App () {

  const [ characters , setCharacters ] = useState([]);

  const characterContain = (obj) => {
    const exist = characters.filter((c) => c.id === obj.id);
    if(exist.length === 0) return false;
    else return true;
  }

  const onClose = (e) => {
      const cardId = e.target.parentNode.id;
      setCharacters(
          characters.filter((chacter) => chacter.id !== parseInt(cardId))
      );
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

  return (
    <div className='App'>
      <BackgroundVideo />
      <Nav onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}



// {/* <Routes>
// <div>
//   <Route path='/' element={<Home />}/>
// </div>
// </Routes> */}


export default App
