import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddressList from "./components/address-list.component";
import LoginControl from "./components/login-control.component";

class App extends Component {



  
  render() {
    return (
      <div>
      <div class="navbar">
        <div class="container-fluid">
        <div class="navbar-header">
        <span class="navbar-brand mb-0 h1">Agenda</span>
        </div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Iniciar Sesión</a>
          </li>
        </ul>   
        </div>
      </div>

      <div class="container">
        <div class="row">
          <BrowserRouter>
          <Switch>
              <Route exact path={["/", "/person"]} component={AddressList}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
      </div>

    );
  }
}

export default App;
