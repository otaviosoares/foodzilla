import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Row, Col } from 'react-materialize';

import Navbar from './template/Navbar'
import Home from './home/Home'
import { ChooseRecipeContainer } from './choose-recipe/ChooseRecipe';
import { CheckoutContainer } from './checkout/Checkout';

import './App.css';

class App extends Component {
  render() {
    return (
      <Row>
        <Navbar />
        <Router>
          <Col s={12} className='main-container'>
            <Route exact path="/" component={Home} />
            <Route path="/choose" component={ChooseRecipeContainer}/>
            <Route path="/checkout" component={CheckoutContainer}/>
          </Col>
        </Router>
      </Row>
    );
  }
}

export default App;
