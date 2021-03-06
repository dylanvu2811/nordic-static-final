import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import Footer from './components/Common/Footer/Footer';
import Single from './containers/Single/Single';
import Contact from './containers/Contact/Contact';
import Cart from './containers/Cart/Cart';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/product/:id" component={Single} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
