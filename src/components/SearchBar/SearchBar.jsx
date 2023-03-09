import React , { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa'
import SearchBarStyle from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [ search , setSearch ] = useState('');
   const handleChange = (e) => {
      let inputValue = e.target.value;
      setSearch(inputValue);
   }
   return (
      <div className={SearchBarStyle.div}>
         <input 
            type='search' 
            value={search} 
            onChange={handleChange} 
            placeholder='Ingrese un Numero de ID'
         />
         <button 
            className={SearchBarStyle.button}
            onClick={() => onSearch(search)}
         >
         <FaSearch className={SearchBarStyle.iconSearch}/>
      </button>
      </div>
   );
}
