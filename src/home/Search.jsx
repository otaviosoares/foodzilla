import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchForRecipes } from './actions'
import './Search.css'

export default class Search extends Component {
  state = {
    errors: ""
  }
  search() {
    this.props.searchForRecipes(this.refs.terms.state.value)
    .then(() => {
      if (this.props.recipes.length) {
        return this.props.history.push('/choose');
      }
      this.setState({
        errors: "Your search haven't returned any result."
      })
    });
  }

  render() {
    const { errors} = this.state;
    return (
      <Row className="search-content">
          <Col s={12}>
            <h3>Search for ingredients</h3>
          </Col>
          <Input s={10} ref="terms" placeholder="Ex: rice, beans, tomatoes" />
          <Button waves='light' onClick={this.search.bind(this)}>go<Icon right>cloud</Icon></Button>
          {errors ? (<p>{errors}</p>) : ""}
      </Row>
    )
  }
}

const mapStateToProps = state => ({recipes: state.recipes.all || [] });
const mapDispatchToProps = dispatch => bindActionCreators({ searchForRecipes }, dispatch);

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);