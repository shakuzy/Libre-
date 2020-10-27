import React from "react";
import { CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../ItemDetail/ItemDetail.css"
import { Card , Button} from "react-bootstrap"
export default function ItemDetail(props) {

return(
<div>
     {props.prod.map(element => <span id={element.id} key={element.id}> <CardGroup classname="container">
  <Card>
    <Card.Img variant="top" src={element.img} className="img" height="250px" width="700px" />
    <Card.Body>
      <Card.Title>{element.title}</Card.Title>
      <Card.Text>
       <h3>${element.price.toLocaleString('de-DE')}</h3>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <NavLink to={`/item/${element.id}`}><Button variant="primary">Ver detalles</Button></NavLink>
    </Card.Footer>
  </Card></CardGroup></span>)}
    
  </div>
     
    
    
    );
}
