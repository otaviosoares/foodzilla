import React from 'react';
import { Col, Card } from 'react-materialize';

export default (props) => (
  <Card title='Shopping List'>
    <Col s={6}>
      <h6>Things you have</h6>
    </Col>
    <Col s={6}>
      <h6>Things you don't have</h6>
    </Col>
  </Card>
)