import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Item from "./Item";
import data from "./items.json"

// Clase
export class List extends Component {
  
  //Constructor para guardar el objeto en State
  constructor(props) {
    super(props)
    
    this.image = React.createRef();

    this.state = {
      items:data
    }
  }
    
  //Método para pintar tareas
  paintItems = () => this.state.items.map((item, i) => <Item data={item} key={uuidv4()} delete={()=>this.deleteItem(i)}/>)

  //Método para borrar todos los items
  deleteItems = () => this.setState({items:[]});

  //Método para recargar los items
  resetItems = () => this.setState({items:data});

  //Método para borrar un item individual
  deleteItem = (i) => {
    const remainingItems = this.state.items.filter((item,j) => i!==j);
    this.setState({items:remainingItems});
  }

  addItem = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const date = event.target.date.value;
    const category = event.target.category.value;
    const site = event.target.site.value;
    const image = this.image.current.value; //Leer campo por referencia
    const newItem = {title,description,date,category,site,image};
    this.setState({items:[newItem,...this.state.items]}) // [{},{},{}] --> [{},{},{},{newProduct}]
  }

  //Método para renderizar tareas
  render() {
    return (
      <section>
        <h1>Añadir item</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="title">Título:</label><br />
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="description">Descripción:</label><br />
          <input type="text" id="description" name="description" /><br />
          <label htmlFor="date">Fecha y hora:</label><br />
          <input type="text" id="date" name="date" /><br />
          <label htmlFor="category">Categoría:</label><br />
          <input type="text" id="category" name="category" /><br />
          <label htmlFor="site">Ubicación:</label><br />
          <input type="text" id="site" name="site" /><br />
          <label htmlFor="image">URL imágen:</label><br />
          <input type="url" id="image" name="image" ref={this.image} /><br />
          <input type="submit" value="Añadir" /><br />
        </form>
        {this.paintItems()}
        {this.state.items.length?<button onClick={this.deleteItems}>Borrar items</button>:""}
        <button onClick={this.resetItems}>Recargar tareas</button>
      </section>
    );
  };
};

export default List;
