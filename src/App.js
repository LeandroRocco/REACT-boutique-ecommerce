import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path="/carrito">
              <CartWidget />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route exact path="/productos/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;