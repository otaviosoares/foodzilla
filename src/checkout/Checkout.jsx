import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeDetail from '../recipe-detail/RecipeDetail'
import ShoppingList from '../shopping-list/ShoppingList'

export default class Checkout extends Component {
  recipe = {
    "id": 4560485130734345000,
    "title": "Healthy spinach",
    "image": "https://pbs.twimg.com/media/CrCQ8EyWYAAZg8v.jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "likes": 128
  };

  render() {    
    return (
      <div>
        <h3>Checkout:</h3>
        <RecipeDetail recipe={this.recipe} />
        <ShoppingList recipe={this.recipe} />
      </div>
    )
  }
}



const mapStateToProps = state => ({recipe: state.currentRecipe });
// const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch);

export const CheckoutContainer = connect(mapStateToProps, null)(Checkout);