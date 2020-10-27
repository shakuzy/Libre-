import React, { Component } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Route } from "react-router-dom";
import Producto from "../Producto/producto";
import Cart from "../Cart/cart"
import { CartProvider } from "../../context/cartContext"
import Productos from "../Productos/Productos";
import Categories from "../Categories/Categories";
import Category from"../Category/Category";
import Formulario from "../Formulario/Formulario";
export default class Home extends Component{

    render(){
      return(
        
        <div>
          <CartProvider>
        
          
        <Route exact path="/"
          component={ItemDetailContainer}
        />

      <Route path="/item/:id"
        component={Producto}
      />

  <Route path="/cart"
    component={Cart}
  />

<Route path="/productos"
  component={Productos}
/>

<Route
  path="/allcategories"
  component={Categories}
/>

<Route
  path="/categories/:categoryid"
  component={Category}
/>
<Route
  path="/formulario"
  component={Formulario}
/>







  </CartProvider>
          </div>


      );
     }
   
   
   }
