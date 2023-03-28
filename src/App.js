import { React, useState, useEffect, Routes, Route, useLocation, useNavigate, Cards, Nav, BackgroundVideo, About, Detail, Form, Favorites, NotFound, axios } from "./imports-App";

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "dd16337f0a28.9e14f74e16d275d648d6";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const email = "santy@gmail.com";
  const password = "carp91218";
  const charactersRandom = [];

  useEffect(() => {
    if(!access) navigate ("/login");
    if(access && location.pathname === "/login"){
        navigate ("/", {replace: true});
    }
    // eslint-disable-next-line
  }, [])


  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      // alert('Inicio Exitoso!!');
      setAccess(true);
      navigate("/", { replace: true });
    } else {
      alert("El usuario o la contraseña son incorrectos");
    }
  };

  const continuarSinLogin = () => {
    setAccess(true);
    navigate("/", {replace: true});
  }

  const logout = () => {
    setAccess(false);
    navigate("/login", { replace: true });
  };



  const characterContain = (id) => {
    const exist = characters.filter((c) => c.id === id);
    if (exist.length === 0) return false;
    else return true;
  };

  const onClose = (e) => {
    const cardId = e.target.id;
    charactersRandom.filter((id) => id !== cardId);
    setCharacters(characters.filter((chacter) => chacter.id !== cardId));
  };

  const onSearch = (chacter) => {
    // fetch(`https://rickandmortyapi.com/api/character/${chacter}`)
    fetch(`${URL}/character/${chacter}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(characterContain(data))
        if (data.name) {
          if (!characterContain(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert(`${data.name} ya fue ingresado`);
          }
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  };

  const addCharacterX = (num) => {
    let i = 1;
    let chactersId = [];
    while (i <= num) {
      let numRamdom = Math.floor(Math.random() * 826);
      if (
        !characterContain(numRamdom) &&
        !chactersId.includes(numRamdom)
      ) {
        chactersId.push(numRamdom);
        i++;
      }
    }
    charactersRandom.push(...chactersId);
    if (chactersId.length === num) {
      chactersId.forEach((id) => {
        axios(`${URL}/character/${id}?key=${KEY}`)
        .then((data) =>
          setCharacters((oldCharacters) => [...oldCharacters, data.data])
        )
        .catch((error) => console.log(error))
      });
    }
  };

// Hay que cambiar la ruta de Form, crear una que sea "/login" y asignarle a Cards la ruta "/", eliminar la ruta "/home"

  return (
    <div className="App">
      <BackgroundVideo />
      <div>
        {(access) ? (
          <>
            <Nav onSearch={onSearch} logout={logout} />
            <Routes>
              <Route path="/"element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} addCharacterX={addCharacterX}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/detail/:idChacter" element={<Detail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        ):(
          <>
            <Routes>
              <Route path="/login" element={<Form login={login} continuarSinLogin={continuarSinLogin}/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )
        }
      </div>
    </div>
  );
}

export default App;