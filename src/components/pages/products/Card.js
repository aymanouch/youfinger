import jump from 'jump.js';
import React from 'react';
import {Link}from 'react-router-dom';
import './Card.css';


function Card({name, price, prevPrice, type, img}) {
    return (
    <div className="card-product__card">
        <div className="card-procduct__container">
              <div className="card-product__image">
                  <img src={img} alt={name} />
              </div>
              <div className="card-product__info">
                  <h3>{name}</h3>
                  <div className="card-product__price">
                  <h4>{price}MAD</h4>
                  <h5>{prevPrice}MAD</h5>
                  </div>
                  <span className="product-type">{type}</span>
              </div>
    <Link to={`/${name}`}></Link>
        </div>
    </div>);

}

export default Card;