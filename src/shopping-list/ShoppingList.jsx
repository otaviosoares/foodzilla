import React from 'react';
import { Col, Card, Button } from 'react-materialize';

import './ShoppingList.css';

export default (props) => (
  
  <Card title='Shopping List' className="shopping-list">
    <Col s={6}>
      <h6>Things you have</h6>
    </Col>
    <Col s={6}>
      <h6>Things you don't have</h6>
    </Col>
    <div className="right-align"><Button>Order</Button></div>
  </Card>
)