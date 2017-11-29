import React, { Component } from 'react';

import {SearchContainer} from './Search'
// import IngredientSuggestions from './IngredientSuggestions'

import './Home.css'

export default class Home extends Component {
  onSearch() {
    this.props.history.push('/choose');
  }

  render() {
    return (
      <div className="home-content">
        <SearchContainer onSearch={this.onSearch.bind(this)} />
      </div>
    );
  }
}
