import React from 'react';
import Card from './Card';
import {dbProducts} from './db-products';
import './products.css';
const dbOtherProducts = require('./db-other-products.json');
const Products = () => {
  console.log(dbOtherProducts);
           return (<div className="prouducts">
             <div className="container">
                 <div className="headig-products"><h1>Parfum</h1></div>
                 <div className="container-products">
                 {dbProducts.map(item => {
                 return <Card {...item} key={item.id} />
                 })}
                 </div>
                 <div className="headig-products"><h1>Other Products</h1></div>
                 <div className="container-products">
                 {dbOtherProducts.otherProducts.map(item => {
                 return <Card {...item} key={item.id} />
                 })}
                 </div>
             </div>
           </div>);
};

export default Products;