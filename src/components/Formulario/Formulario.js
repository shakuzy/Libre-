import React, { useState , useContext , useEffect } from "react"
import { getFirestore } from "../../firebase";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { CartContext } from '../../context/cartContext';
import { Button , Form } from "react-bootstrap"
import "../Formulario/Formulario.css"

const Formulario = () =>{
    const [cart] = useContext(CartContext);
    const [total , setTotal] = useState(0);
    const [mostrar, setMostrar] = useState(false);
     const [orderId , setOrderId] = useState();
     const [error , setError] = useState();
    
    const [numero, setNumero] = useState('')
    const [apellido, setApellido] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    let r = 0;
    useEffect(()=>{
  
      for (let i = 0; i < cart.length; i++) {
         r = r + cart[i][2];
         setTotal(r)

      }
      console.clear();

    });
    const db = getFirestore();

    const Validarr = () => {
      if (email!==emailConfirm) {
        alert("Los mails no coinciden")
      } else {
        Validar();
      }
    }

    const Validar = () =>{
        
          

      const userInfo = {nombre,  apellido, numero, email}

        const items = {item: cart.map(element=>element[0]), cantidad: cart.map(element=>element[1]), precio_item: cart.map(element=>element[2])}
        
        const orders = db.collection("orders");
   
        const newOrder = {
               buyer: userInfo,
               items: items,
               date: firebase.firestore.Timestamp.fromDate(new Date()),
               total: total,
           };
   
           
       orders.add(newOrder).then(( {id} ) => {
               setOrderId(id);
           }).catch(err => {
               setError(err);
           }).finally(()=>{
              updateDocument();
               setMostrar(true)
               console.clear();
               ;
           });
            }

   const updateDocument = () =>{
        const batch = db.batch();

        cart.map(element=>
        
        batch.update(db.collection("items").doc(element[0].id), {"stock": element[0].stock - element[1]})

        
        );batch.commit().then(r=>r);
   }


   
    
    return(<div>

    {mostrar ? <div className="orden"><h1>Gracias por su compra</h1><h3>Este es su numero de orden: {orderId} </h3></div> :
    <div className="con">
    <Form >
  <Form.Group controlId="formBasicEmail">
  <Form.Label className="label"><h6>Nombres</h6></Form.Label>
<Form.Control className="input" type="text" placeholder="Ingrese su nombre..." onChange={(event)=>setNombre(event.target.value)} />

  <Form.Label className="label"><h6>Apellidos</h6></Form.Label>
<Form.Control className="input" type="text" placeholder="Ingrese su apellido..." onChange={(event)=>setApellido(event.target.value)}/>

  <Form.Label className="label"><h6>Telefono</h6></Form.Label>
 <Form.Control className="input" type="number" placeholder="Ingrese su numero de telefono..."onChange={(event)=>setNumero(event.target.value)}/>

  <Form.Label className="label"><h6>Email</h6></Form.Label>
 <Form.Control className="input" type="email" placeholder="Ingrese su mail..."onChange={(event)=>setEmail(event.target.value)} />
 <Form.Label> </Form.Label>

<Form.Control className="input" type="email" placeholder="Repita su email..."onChange={(event)=>setEmailConfirm(event.target.value)} />
<Form.Label> </Form.Label>

  <Button variant="primary" type="button"className="boton" onClick={Validarr}>
    Submit
  </Button>
  </Form.Group>

 
    
</Form>
</div>


            
          
       }
      
      </div>);
} 

export default Formulario;
