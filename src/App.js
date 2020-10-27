import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from "./components/Home/home";

export default class App extends Component{


 render() {
   return (
     
      <BrowserRouter>

      <NavBar/>

      <Switch>
        <Route path="/"
          component={Home}/>
        
      </Switch>
      
</BrowserRouter>
  );
}

}


