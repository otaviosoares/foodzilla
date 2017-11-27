import React from 'react';
import { Col, Card, CardTitle } from 'react-materialize';

import Check from '../template/Check'

import './RecipeDetail.css';

export default (props) => (
  <div>
    <Card
      className='horizontal'
      header={<CardTitle image={props.recipe.image}>{props.recipe.title}</CardTitle>}>
      <Col s={9}>
        <h5><small>Instructions</small></h5>
        <p>{props.recipe.instructions}</p>
        <h5><small>Ready in (min)</small></h5>
        <p>{props.recipe.readyInMinutes}</p>
        <h5><small>Serves</small></h5>
        <p>{props.recipe.servings}</p>
      </Col>
      <Col s={3}>
        <h5><small>Detail</small></h5>
        <p className="recipe-class"><strong>Vegetarian</strong>: <Check value={props.recipe.vegetarian}/></p>
        <p className="recipe-class"><strong>Vegan</strong>: <Check value={props.recipe.vegan}/></p>
        <p className="recipe-class"><strong>Gluten free</strong>: <Check value={props.recipe.glutenFree}/></p>
        <p className="recipe-class"><strong>Dairy free</strong>: <Check value={props.recipe.dairyFree}/></p>
        <p className="recipe-class"><strong>Healthy</strong>: <Check value={props.recipe.veryHealthy}/></p>
        <p className="recipe-class"><strong>Cheap</strong>: <Check value={props.recipe.cheap}/></p>
        <p className="recipe-class"><strong>Popular</strong>: <Check value={props.recipe.veryPopular}/></p>
        <p className="recipe-class"><strong>Sustainable</strong>: <Check value={props.recipe.sustainable}/></p>
        <p className="recipe-class"><strong>Low food map</strong>: <Check value={props.recipe.lowFodmap}/></p>
        <p className="recipe-class"><strong>Ketogenic</strong>: <Check value={props.recipe.ketogenic}/></p>
        <p className="recipe-class"><strong>Whole 30</strong>: <Check value={props.recipe.whole30}/></p>
      </Col>
    </Card>
  </div>
)