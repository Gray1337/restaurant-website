import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import ShopInfo from './pages/ShopInfo';
import Booking from './pages/Booking';
import 'antd/dist/antd.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/shopinfo">
          <ShopInfo />
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
