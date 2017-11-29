import React, { Component } from 'react';
import { Col } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectRecipe } from './actions';
import RecipeListItem from '../recipe-list/RecipeListItem'

export default class ChooseRecipe extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    if (!this.props.recipes.length) {
      this.props.history.replace('/', {errors: "You need to choose the ingredients first."});
    }
  }

  onSelectRecipe(recipe) {
    console.log(arguments)
    this.props.selectRecipe(recipe.id)
      .then(() => {
        return this.props.history.push('/checkout');
      })
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <h3>Choose your recipe:</h3>
        {recipes.map((recipe, index) => (
          <Col s={3} key={recipe.id.toString()}>
            <RecipeListItem recipe={recipe} onSelect={this.onSelectRecipe.bind(this, recipe)} />
          </Col>
        ))}
      </div>
    )
  }
}



const mapStateToProps = state => ({recipes: state.recipes.all || [], currentRecipe: state.currentRecipe });
const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch);

export const ChooseRecipeContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseRecipe);