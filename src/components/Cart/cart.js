import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import { CartContext } from '../../context/cartContext';
import { Table } from "react-bootstrap"
import "../Cart/Cart.css"
const Cart = () => {
  const [cart] = useContext(CartContext);
  const [total , setTotal] = useState(0);

 

 
  useEffect(()=>{
    let r = 0;
    for (let i = 0; i < cart.length; i++) {
       r = r + cart[i][2];
      
    }
    setTotal(r)
    console.clear()

  });
   
  return (
    <div className="c">{cart.length!==0&&
      <Table striped bordered hover variant="dark" className="t">
      <thead>
    <tr>
      <th>Producto</th>
      <th>Imagen</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Subtotal</th>
      
    </tr>
  </thead>
  <tbody>
    
  {cart.map(element => <tr id={element.id} key={element.id}>
    

  
      <td>{element[0].title}</td>
      <td><img src={element[0].img} height="90"/></td>
      <td>{element[1]}</td>
      <td>{element[0].price.toLocaleString('de-DE')}</td>
      
      <td>{element[2].toLocaleString('de-DE')}</td>
      
   


      



  </tr>)} 
  <td></td>
  <td></td>
  <td>Cantidad de items: {cart.length}</td>
  <td></td>
      <td>Total: {total.toLocaleString('de-DE')}</td>
  </tbody>
  </Table>}
    
   
  

  
  <div className="r">
  {cart.length!==0 ? <div>


    

     <NavLink to="/formulario"> <button type="button" className="btn btn-primary">Registrarse</button></NavLink>

    </div> 
    :
    <div>
      <h3> No hay productos en el carrito, para comprar apriete el siguente boton</h3>
  <NavLink to="/">
  <button type="button" className="btn btn-info">Seguir Comprando</button>

    </NavLink>
 
      
  
</div>
} </div>

  


    </div>
  
  
  )
}

export default Cart;