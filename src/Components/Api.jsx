import React, { useEffect, useState } from 'react'
import "./astyle.css"

/* https://rickandmortyapi.com/api/character */

export const Api = () => {
    const [character, setCharacter] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data.results);
      };
      fetchData();
    },[]);
   

  return (
    <div>

    </div>
  )
}
