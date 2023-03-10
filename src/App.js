import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form  from './components/Form/Form'
// import Home from './components/Home/Home.jsx'

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";



function App () {
  const [ characters , setCharacters ] = useState([]);
  const [ access , setAccess ] = useState(false);
  const email = 'santy@gmail.com';
  const password = 'carp91218';
  const location = useLocation();
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === email && userData.password === password){
      alert('Inicio Exitoso!!');
      setAccess(true);
      navigate('/home', {replace: true});
    }else{
      alert ('El usuario o la contraseña son incorrectos');
    }
  }

  useEffect(() => {
    if (access && location.pathname === '/') navigate('/home', { replace: true });
    if(!access) navigate('/');
  }, [access, location, navigate]); 

  const characterContain = (obj) => {
    const exist = characters.filter((c) => c.id === obj.id);
    if(exist.length === 0) return false;
    else return true;
  }

  const onClose = (e) => {
      const cardId = e.target.parentNode.id;
      setCharacters(
          characters.filter((chacter) => chacter.id !== cardId)
      );
  }

  const onSearch = (chacter) => {
    // fetch(`https://rickandmortyapi.com/api/character/${chacter}`)
    fetch(`${URL}/character/${chacter}?key=${KEY}`)
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
      <div>
      {
        (location.pathname === '/' && !access) ? <Form login={login}/> 
        : (
        <>
          <Nav onSearch={onSearch}/>
          <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:idChacter" element={<Detail />}/>
          </Routes>
        </>
        )
      }
      </div>
    </div>
  )
}

export default App


// {/* <Routes>
// <div>
//   <Route path='/' element={<Home />}/>
// </div>
// </Routes> */}

// {/* <Routes>
// <Route path='/' render={() => {<Cards characters={characters} onClose={onClose}/>} } />
// </Routes> */}