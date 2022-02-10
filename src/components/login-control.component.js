import { render } from "react-dom";
import React, { Component } from "react";
import AddressList from "./address-list.component";
import appWithLogin from "./appWithLogin";
import appWithoutLogin from "./appWithoutLogin";
import { UserContext } from "../providers/UserProvider";
import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class LoginControl extends React.Component{
    
    constructor(props){
        super(props);
        this.appWithoutLogin = this.appWithoutLogin.bind(this);
        this.appWithLogin = this.appWithLogin.bind(this);

    }

    
}
export default () => {
    const user = useContext(UserContext);
    const appWithLoginCode = React.createElement(appWithLogin);
    const appWithoutLoginCode = React.createElement(appWithoutLogin);
    return (
        user ?
        appWithLoginCode
            :
        appWithoutLoginCode
        );

}
