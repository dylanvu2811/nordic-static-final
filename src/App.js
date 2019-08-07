import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import Footer from './components/Common/Footer/Footer';
import ShippingInformation from './components/Common/ShippingInformation/ShippingInformation';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
          <ShippingInformation />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
