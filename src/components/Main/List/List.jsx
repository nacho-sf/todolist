import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './List.css'

import Item from "./Item";
import data from "./items.json"

// Clase
export class List extends Component {
  
  //Constructor para guardar el objeto en State
  constructor(props) {
    super(props)

    this.title = React.createRef();
    this.description = React.createRef();
    this.date = React.createRef();
    this.category = React.createRef();
    this.site = React.createRef();
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
    
    let title = this.title.current.value;
    let description = this.description.current.value;
    let date = this.date.current.value;
    let category = this.category.current.value;
    let site = this.site.current.value;
    let image = this.image.current.value;
    let newItem = {title,description,date,category,site,image};

    this.setState({items:[newItem,...this.state.items]})

    title = this.title.current.value="";
    description = this.description.current.value="";
    date = this.date.current.value="";
    category = this.category.current.value="";
    site = this.site.current.value="";
    image = this.image.current.value="";
  }


  //Método para renderizar tareas
  render() {
    return (
      <section>
        <h1 className="main_title">Añade una tarea</h1>
        <form onSubmit={this.addItem} className="form_box">
          
          <input type="text" id="title" name="title" placeholder="Título..." className="input_title" ref={this.title}/>

          <input type="text" id="category" name="category" placeholder="Categoría..." className="input_category" ref={this.category}/>
          
          <input type="date" id="date" name="date" placeholder="Fecha..." className="input_date" ref={this.date}/>

          <textarea type="textarea" id="description" name="description" placeholder="Descripción..." className="input_description" ref={this.description}/>
          
          <input type="text" id="site" name="site" placeholder="Ubicación..." className="input_site" ref={this.site}/>
          
          <input type="url" id="image" name="image" placeholder="URL imagen..." className="input_image" ref={this.image} />
          
          <input type="submit" value="Añadir" className="button_form" />
        </form>

        {this.paintItems()}

        {this.state.items.length?<button onClick={this.deleteItems}>Borrar items</button>:""}

        <button onClick={this.resetItems}>Recargar tareas</button>

      </section>
    );
  };
};

export default List;
