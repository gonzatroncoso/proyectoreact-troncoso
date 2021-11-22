import React from 'react';
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import  NavBar from './components/NavBar/NavBar';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './components/Cart/Cart'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartContextProvider from './context/CartContext'
import './App.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div className="App">
            <NavBar />

              <Switch>
                

                <Route exact path = "/">
                  <ItemListContainer saludo= 'Tienda de celulares' />   
                </Route>

                <Route exact path = "/marca/:marcaID">
                  <ItemListContainer saludo= 'Tienda de celulares' />   
                </Route>


                <Route exact path = "/detail/:id">
                  <ItemDetailContainer />
                </Route>

                <Route exact path = "/cart">
                  <Cart />
                </Route>

              </Switch>

          </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}
  

export default App;
