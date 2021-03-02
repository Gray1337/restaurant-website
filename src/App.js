import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import ShopInfo from './pages/ShopInfo';
import 'antd/dist/antd.css';
import ViewportProvider from "./components/Common/ViewPortContext";
import ScrollToTop from './components/Common/ScrollToTop'

function App() {
  return (
    <ViewportProvider>
      <BrowserRouter>
      <ScrollToTop />
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
        </Switch>
      </BrowserRouter>
    </ViewportProvider>
  );
}

export default App;
