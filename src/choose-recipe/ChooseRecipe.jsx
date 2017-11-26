import React, { Component } from 'react';
import { Col } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectRecipe } from './actions';
import RecipeListItem from '../recipe-list/RecipeListItem'

// import './IngredientSuggestions.css'

export default class ChooseRecipe extends Component {
  recipes = [
    {
      "id": 4560485130734345000,
      "title": "Healthy spinach",
      "image": "https://pbs.twimg.com/media/CrCQ8EyWYAAZg8v.jpg",
      "usedIngredientCount": 1,
      "missedIngredientCount": 3,
      "likes": 128
    },
    {
      "id": 8101413461771085000,
      "title": "Lasagna",
      "image": "https://abrilclaudia.files.wordpress.com/2016/10/receita-macarrao-molho-requeijao-maionese.jpg?quality=85&strip=info&w=620",
      "usedIngredientCount": 3,
      "missedIngredientCount": 1,
      "likes": 16
    },
    {
      "id": 5122744653610400000,
      "title": "Salmon Pasta Salad",
      "image": "https://3.bp.blogspot.com/-TxPbwLEFXZU/VxvN56DlovI/AAAAAAAAADY/W_47TbLfeEQd0RgXuXvdCLAruuGkeJm7ACLcB/s1600/Quibe%2Bde%2Bforno%2Blight%2Bcom%2Bcottage.jpg",
      "usedIngredientCount": 1,
      "missedIngredientCount": 3,
      "likes": 79
    },
    {
      "id": 4733988852992226000,
      "title": "Italian Chop Salad",
      "image": "https://abrilclaudia.files.wordpress.com/2017/07/receita-arroz-de-forno-02.jpg?quality=85&strip=info&strip=info",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "likes": 119
    }
  ];

  render() {    
    return (
      <div>
        <h3>Choose your recipe:</h3>
        {this.recipes.map((recipe, index) => (
          <Col s={3} key={recipe.id.toString()}>
            <RecipeListItem recipe={recipe} />
          </Col>
        ))}
      </div>
    )
  }
}



const mapStateToProps = state => ({highlights: state.recipes });
const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch);

export const ChooseRecipeContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseRecipe);