import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Bienvenidos a Boutique, sillas y sillones" />
      <div className="Desafio">
        <h1>Desafío 5 - Clase 6 - Leandro Rocco</h1>
      </div>
    </div>
  );
}

export default App;
