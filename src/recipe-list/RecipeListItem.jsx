import React from 'react';
import { Card, CardTitle, Icon } from 'react-materialize';

export default (props) => (
  <Card 
    key={props.recipe.id.toString()}
    className='small'
    header={<CardTitle key={props.recipe.id.toString()} image={props.recipe.image}>{props.recipe.title}</CardTitle>}
    actions={[<a href='#' key={props.recipe.id.toString()} onClick={props.onSelect}>Select</a>]}>
    <Icon>check</Icon> Used ingredients {props.recipe.usedIngredientCount}
    <Icon>cancel</Icon> Missed ingredients {props.recipe.missedIngredientCount}
    <Icon>favorite</Icon> {props.recipe.likes}
  </Card>
)