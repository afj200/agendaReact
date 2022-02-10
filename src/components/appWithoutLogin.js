import { render } from "react-dom";
import React, { Component } from "react";
import AddressList from "./address-list.component";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class appWithoutLogin extends React.Component{

    render(){
        return(
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

export default appWithoutLogin;