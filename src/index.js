import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeContext } from './context/ThemeContext';
import App from './App';

const color = 'red';
ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={{color}}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


