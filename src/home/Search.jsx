import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchForRecipes } from './actions'
import './Search.css'

export default class Search extends Component {
  search() {
    this.props.searchForRecipes(this.refs.terms.state.value)
  }

  render() {
    return (
      <Row className="search-content">
          <Col s={12}>
            <h3>Search for ingredients</h3>
          </Col>
          <Input s={10} ref="terms" placeholder="Ex: rice, beans, tomatoes" />
          <Button waves='light' onClick={this.search.bind(this)}>go<Icon right>cloud</Icon></Button>
      </Row>
    )
  }
}

// const mapStateToProps = state => {
//   return ({highlights: state.highlights[window.location.toString()] })
// };
const mapDispatchToProps = dispatch => bindActionCreators({ searchForRecipes }, dispatch);

export const SearchContainer = connect(null, mapDispatchToProps)(Search);