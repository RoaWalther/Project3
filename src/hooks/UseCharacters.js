import React, { useState } from 'react';

const UseCharacters = (url) => {

    const [characters, setCharacters]= useState([]);
    
    React.useEffect(()=>{
        fetch(url).then((res)=> res.json())
        .then((res)=> setCharacters(res.results));
    },[url]);

  return (
    characters
  );
}

export default UseCharacters;