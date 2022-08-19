import React from "react";
import '../css/characters.css'

//rafce
const margin = "20px";

const Search = ({search,searchInput, handleSearch}) => {
  return (
    <div className='search' >
        <label > Search 🔍
        <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
        </label>
    </div>
  )
}

export default Search