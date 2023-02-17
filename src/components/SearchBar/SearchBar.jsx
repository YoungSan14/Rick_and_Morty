import React , { useState } from 'react'; 
import SearchBarStyle from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [ search , setSearch ] = useState('');
   const handleChange = (e) => {
      const inputValue = e.target.value;
      setSearch(inputValue);
   }
   return (
      // { marginRight: '5rem', position:'absolute', top: '25%',}}
      <div className={SearchBarStyle.div}>
         <input type='search' value={search} onChange={handleChange} placeholder='Ingrese un Numero de ID'/>
      <button className={SearchBarStyle.button} onClick={() => onSearch(search)}>Buscar</button>
      </div>
   );
}
