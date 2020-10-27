import React , { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component{
constructor(){
        super();

        this.productos = [
        { id: '1', name: 'Mochila', description: 'Tela camuflada oscura', stock: 3},
        { id: '2', name: 'Cartuchera', description: 'Color indigo, chica', stock: 5}
        ];

 }

 

    render(){
        return(
        <div>

        <Item p={this.productos}/>
        
     </div>
     );
    }   

}
        
        

