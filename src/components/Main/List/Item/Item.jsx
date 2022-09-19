import React, { Component } from "react";
import './Item.css'

export class Item extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      title: this.props.data.title || "Título",
      description: this.props.data.description || "Descripción",
      date: this.props.data.date || "Fecha y hora",
      category: this.props.data.category || "Categoría",
      site: this.props.data.site || "Ubicación",
      image: this.props.data.image || "URL imagen"
    }
  }
    
  render() {
    const {title,description,date,category,site,image} = this.props.data;
    let url_img = image || "https://fixner.com/wp-content/uploads/2020/04/Cabecera-Gestion-de-trabajos.jpg";

    return (
      <article className="box_item">
        <section className="img_button">
          <img src={url_img} alt={this.state.title} className="image_item" /><br />
          <button className="button_item" onClick={this.props.delete}>Descartar</button>
        </section>
        <section className="content">
          <p className="title_item">{title}</p>
          <p className="date_item">{date}</p>
          <p className="description_item">{description}</p>
          <p className="site_item">{site}</p>
          <p className="category_item">{category}</p>
        </section>
      </article>
    );
  };
};

export default Item;
