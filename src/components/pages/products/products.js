import React from 'react';
import Card from './Card';
import {dbProducts} from './db-products';
import './products.css';
const Products = () => {
           return (<div className="prouducts">
             <div className="container">
                 <div className="headig-products"><h1>Parfum</h1></div>
                 <div className="container-products">
                 {dbProducts.map(item => {
                 return <Card {...item} key={item.id} />
                 })}
                 </div>
             
             </div>
           </div>);
};

export default Products;