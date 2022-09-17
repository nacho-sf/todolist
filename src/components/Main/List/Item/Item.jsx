import React, { Component } from "react";
import './Item.css'

export class Item extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      title: this.props.data.title || "Item tareas"
    }
  }
    
  render() {
    const {description,date,category,site,image} = this.props.data;
    let url_img = image || "https://www.laylita.com/recetas/wp-content/uploads/2014/06/Caipirinha-o-caipiriC3B1a-de-piC3B1a-500x500.jpg";

    return (
      <article>
        <h3>Título: {this.state.title}</h3>
        <p>Descripción: {description}</p>
        <p>Fecha y hora: {date}</p>
        <p>Categoría: {category}</p>
        <p>Ubicación: {site}</p>
        <img src={url_img} alt={this.state.title} className="image_item" /><br />
        <button onClick={this.props.delete}>Borrar</button>
      </article>
    );
  };
};

export default Item;
