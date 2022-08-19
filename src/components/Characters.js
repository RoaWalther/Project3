import React, {  useMemo, useReducer, useState, useRef, useCallback } from 'react';
import '../css/characters.css';
import Search from './Search';
import UseCharacters from '../hooks/UseCharacters';

const initial = {
  favorites: []
}

const favoriteReducer = (state, action)=>{
  switch (action.type){
    case 'ADD_TO_FAVORITE ': 
    return {...state,
    favorites: [...state.favorites, action.payload]
    };
    default: return state;
  }
}

const API = 'https://rickandmortyapi.com/api/character/';

const Characters = () => {

  const [favorites, dispatch] = useReducer(favoriteReducer, initial);

  const [search, setSearch] = useState('');

  const searchInput= useRef(null);

  const characters = UseCharacters(API);

  const handleClick = (favorite)=>{
    dispatch({type: 'ADD_TO_FAVORITE ', payload: favorite});
  }
  const handleSearch = useCallback(()=>{
    setSearch(searchInput.current.value);
  },[])

  const filterUsers = useMemo(()=>
  characters.filter((user) =>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),[characters,search]
  )

  return (
    <main className='Characters'>
            {favorites.favorites.map(favorite =>(
                    <li key={favorite.id}>
                      {favorite.name}
                    </li>
            ))}
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
      {filterUsers.map(character => ( 
        <section className='Character-content'  key={character.id}>
          <div className='order-character' key={character.id}>
            <div className='container'  key={character.id}>
              <img src={character.image} className="character"  key={character.id}></img>
            </div>
              <h2>
                <p>Name: <span>{character.name}</span></p>
                <p>Status: <span>{character.status}</span></p>
                <p>Specie:<span> {character.species}</span></p>
                <p>Origin:<span> {character.origin.name}</span></p>
              </h2>
              <button type='button' onClick={()=> handleClick(character)}>Favorites</button>
          </div>
        </section>
      
      ))}
    </main>
  )
}

export default Characters;