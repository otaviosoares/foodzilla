import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Row, Col } from 'react-materialize';

import Navbar from './template/Navbar'
import Home from './home/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <Row>
        <Navbar />
        <Router>
          <Col s={12} className='main-container'>
            <Route exact path="/" component={Home} />
            {/* <Route path="/detail/:id" component={ContentDetail}/> */}
          </Col>
        </Router>
      </Row>
    );
  }
}

export default App;
