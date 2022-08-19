import React, { useContext, useState } from "react";
import '../css/header.css';
import Characters from './Characters';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    
    let color = useContext(ThemeContext);
    const [darkMode,setDarkMode] = useState(false);

    const hadleClick = ()=>{
       setDarkMode(!darkMode);
    }

  return (
    <header className="Header">
        <div className= { darkMode ? 'dark' : 'ligth'}>
            <div className={ darkMode ? 'Header-container-d' : 'Header-container-l'}>
                <h1 style={color}>ReactHooks</h1>
                <button className={ darkMode ? 'button-ligth' : 'button-dark'} type="button" 
                onClick={hadleClick}> {darkMode ? 'Dark-Mode' : 'Ligth-Mode'}</button>
            </div>
            <Characters></Characters>
        </div>
        
      
    </header>
  );
}

export default Header