import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Product from './pages/product/Products';
import Cart from './pages/cart/Cart';
import Auth from './pages/auth/Auth';
import About from './pages/about/About';


function App() {
  return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
