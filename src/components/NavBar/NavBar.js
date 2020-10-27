import React from 'react';
import "./navbar.css";
import logo from './logo.svg';
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component{
      render(){
            return(
                  
                  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navv">
                  <img src="https://i.ibb.co/YZ2BsCG/logolibre-0.jpg" id="logolibre"/>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                      <NavLink as="link"  className="nav-link" to="/">
                      Inicio</NavLink>
                                        
                      </li>
                      <li className="nav-item">
                      <NavLink to="/productos" as="link"  className="nav-link">
                            Productos</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink to="/allcategories" as="link"  className="nav-link">
                            Categorias</NavLink>
                      </li></ul>
                      <ul>
                     
                      
                
                    </ul>
                  </div>
                  <NavLink to="/cart">
                                        <div className="botonCarrito">
                                  <button type="button" className="btn btn-dark">
                                        <img src={logo} alt="logo"/>
                                         </button>
                                         </div>
                                        </NavLink>
                </nav>
            
            
            );


      }
}

