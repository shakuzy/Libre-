import React,{ useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase"
import Loading from "../Loading";
import { Button, Card }from "react-bootstrap";
import "../Producto/Producto.css"
export default function Producto(){

    const { id } = useParams();
    const [contador, setContador] = useState(0)
    const [buy, setBuy] = useState(false)
    const [cart, setCart] = useContext(CartContext)
    const [cargar, setCargar] = useState(false)
    const [item, setItem] = useState([]);




    useEffect(() => {
        setCargar(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);
    
        item.get().then((doc) => {
          if(!doc.exists){
            console.log("Item does not exist! :(");
          }
          console.log("Item found!");
          setItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
          console.log("Error searching items", error);
        }).finally(() => {
          setCargar(false);
          console.clear()
          
        });
        
      }, []);
const agregarCarrito = () =>{
  setBuy(true)
    setCart(currentCart => [...currentCart, [item, contador, item.price*contador]]);
    console.clear()
  }





return ( cargar ? <Loading/> : <div className="cproduto"> <Card>
  <div className="imgg">
<Card.Img variant="top" src={item.img} /></div>
<Card.Body>
  <Card.Title><h1>{item.title}</h1></Card.Title>
  <Card.Text><h3>{item.description}</h3></Card.Text>
  <Card.Text><h3>Precio: ${item.price}</h3></Card.Text>

  {item.stock >0 ?<div> <h3 className="card-text">Stock:  {item.stock}</h3> 
    <Button  variant="light" onClick={contador>0 ? () => setContador(contador-1) : () => setContador(contador)}>-</Button>
    {contador}
    <Button   variant="light"onClick={contador<item.stock ? () => setContador(contador+1) : () => setContador(contador)} >+</Button><br></br>
    <Button  variant="dark" onClick={contador>0 && agregarCarrito}> Añadir al Carrito {contador>0?contador:""} </Button><br></br>
    
    
    {buy && contador>0 ? <h6>Añadido al carrito</h6> : () => setBuy(false)}
 </div>: <h1>Agregado al carrito, ya no hay mas :(</h1> }

</Card.Body>
</Card>
 
</div>);

    
}