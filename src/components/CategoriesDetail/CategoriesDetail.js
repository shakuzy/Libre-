import React  from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap"
import "../CategoriesDetail/CategoriesDetail.css"

export default function CategoriesDetail(props) {

return(
<div>
     {props.prod.map(element => <span id={element.id} key={element.id}>
      
      <ListGroup>
      <div className="b">
      <NavLink to={`/categories/${element.id}`}> 
      
  <ListGroup.Item action variant="dark">
  {element.name}
  </ListGroup.Item>
      </NavLink>
      </div>
      </ListGroup>
      
</span>)}
    
  </div>
     
    );
}
