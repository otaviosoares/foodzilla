import React, { Component } from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

// import './IngredientSuggestions.css'

export default class IngredientSuggestions extends Component {
  render() {
    return (
      <Row className="search-content">
          <Col s={12}>
            <h5>Suggestions</h5>
          </Col>
          <Card key="1" className='small'
            header="Pepper"
            actions={[<a href='#'>This is a Link</a>]}>
          </Card>
      </Row>
    )
  }
}