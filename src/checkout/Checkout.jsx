import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeDetail from '../recipe-detail/RecipeDetail'
import ShoppingList from '../shopping-list/ShoppingList'

export default class Checkout extends Component {
  render() {    
    const { recipe } = this.props;
    return (
      <div>
        <h3>Checkout:</h3>
        <RecipeDetail recipe={recipe} />
        <ShoppingList recipe={recipe} ingredients={this.props.ingredients} />
      </div>
    )
  }
}



const mapStateToProps = state => ({recipe: state.currentRecipe, ingredients: state.recipes.ingredients });
// const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch);

export const CheckoutContainer = connect(mapStateToProps, null)(Checkout);