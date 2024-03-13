import React, { useEffect, useState } from 'react'
import "./astyle.css"

/* https://rickandmortyapi.com/api/character */

export const Api = () => {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data.results);
        setCharacters(data.results);
      };
      fetchData();
    },[]);
   

  return (
    <div className='wrapper api-container'>
        <div className='cards'> 
            {
              characters.map((character, id) => (
                <div className='card' key={id}>
                    <img src={character.image} alt='photo'/>
                    <h3>{character.name}</h3>
                </div>
              ))
            }
        </div>
    </div>
  )
}
