import React from 'react';
import { Card, CardTitle } from 'react-materialize';

export default (props) => (
  <Card
    className='small horizontal'
    header={<CardTitle image={props.recipe.image}>{props.recipe.title}</CardTitle>}>
    <p>Hello</p>
  </Card>
)