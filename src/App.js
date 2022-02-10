import React, { Component } from 'react';
import './App.css';
import LoginControl from "./components/login-control.component";
import UserProvider from './providers/UserProvider';
import AddressList from './components/address-list.component';

class App extends Component {
  
  render() {
    return (
      <UserProvider>
        <LoginControl>

        </LoginControl>
      </UserProvider>
      

    );
  }
}

export default App;
