import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/products/products';
import {dbProducts} from './components/pages/products/db-products';
import ProShow from './components/pages/ProShow/ProShow';
import Form from './components/pages/Form/Form';
import Whatsapp from './components/pages/Whatsapp';


function App() {
  return (
    <Router>
      <Navbar />  
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/products' exact component={Products} />
        {dbProducts.map(item => {
          return (
            <Route path={`/${item.name}`} exact key={item.id}><ProShow {...item}/></Route>
          );
        })}
        {
          dbProducts.map(item => {
            return (<Route path={`/demmande-${item.name}`} key={item.id + "domand"} exact><Form info={{name:item.name, src:item.img, price:item.price}}/></Route>);
          })
        }
      </Switch>
      <Whatsapp />
      <Footer />
    </Router>
  );
}

export default App;
