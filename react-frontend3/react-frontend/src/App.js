import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListClienteComponent from './components/ListClienteComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateClienteComponent from './components/CreateClienteComponent';
import ViewClienteComponent from './components/ViewClienteComponent';
  

function App() {
 return (
  <div>
    <Router>
      <HeaderComponent />
        <div className="container">
            <Switch> 
                <Route path = "/" exact component = {ListClienteComponent}></Route>
                <Route path = "/clientes" component = {ListClienteComponent}></Route>
                <Route path = "/add-cliente/:id_cliente" component = {CreateClienteComponent}></Route>
                <Route path = "/view-cliente/:id_cliente" component = {ViewClienteComponent}></Route>
            </Switch>
 
              </div>
        <FooterComponent />
      </Router>
  </div>
 
 );
}
export default App;
