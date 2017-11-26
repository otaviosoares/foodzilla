import React, { Component } from 'react';

import {SearchContainer} from './Search'
// import IngredientSuggestions from './IngredientSuggestions'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-content">
        <SearchContainer />
      </div>
    );
  }
}
