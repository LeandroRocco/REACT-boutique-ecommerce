import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer className="EstiloItemList" greeting = "Bienvenidos a Boutique, sillas y sillones" />
      <div className="Desafio">
        <h1>Desafío 3 - Clase 4 - Leandro Rocco</h1>
      </div>
    </div>
  );
}

export default App;
