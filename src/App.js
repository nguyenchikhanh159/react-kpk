import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import routes from './routes/routes';
import Header from './components/home/Header';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import route from './routes/routes';
import Category from './components/category/Category';
import Login from './components/formlogin/FormLogin';
import Singleproduct from './components/singleproduct/SingleProduct';
import Home from './components/home/Home';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Header/>
        {this.showContentMenus(routes)}
    </div>
    </Router>
  );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    return <Switch>{result}</Switch>;
}
}

export default App;
