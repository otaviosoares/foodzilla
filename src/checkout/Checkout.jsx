import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeDetail from '../recipe-detail/RecipeDetail'
import ShoppingList from '../shopping-list/ShoppingList'

export default class Checkout extends Component {
  recipe = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 21,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "servings": 10,
    "sourceUrl": "http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
    "spoonacularSourceUrl": "https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
    "aggregateLikes": 0,
    "creditText": "Epicurious",
    "sourceName": "Epicurious",
    "extendedIngredients": [
      {
        "id": 1022009,
        "aisle": "Ethnic Foods",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
        "name": "ancho chile powder",
        "amount": 1.5,
        "unit": "teaspoons",
        "unitShort": "t",
        "unitLong": "teaspoons",
        "originalString": "1 1/2 teaspoons chipotle chile powder or ancho chile powder",
        "metaInformation": []
      },
      {
        "id": 13926,
        "aisle": "Meat",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-tenderloin.jpg",
        "name": "beef tenderloin",
        "amount": 3.5,
        "unit": "pound",
        "unitShort": "lb",
        "unitLong": "pounds",
        "originalString": "1 3 1/2-pound beef tenderloin",
        "metaInformation": []
      },
      {
        "id": 11677,
        "aisle": "Produce",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg",
        "name": "shallots",
        "amount": 2,
        "unit": "",
        "unitShort": "",
        "unitLong": "",
        "originalString": "2 medium shallots, peeled, quartered",
        "metaInformation": [
          "medium",
          "peeled",
          "quartered"
        ]
      },
      {
        "id": 1002028,
        "aisle": "Spices and Seasonings",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg",
        "name": "sweet paprika",
        "amount": 1,
        "unit": "tablespoon",
        "unitShort": "T",
        "unitLong": "tablespoon",
        "originalString": "1 tablespoon sweet smoked paprika*",
        "metaInformation": [
          "smoked"
        ]
      }
    ],
    "id": 156992,
    "title": "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
    "readyInMinutes": 45,
    "image": "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg",
    "imageType": "jpg",
    "instructions": "PreparationFor spice rub: Combine all ingredients in small bowl.                                                                            Do ahead: Can be made 2 days ahead. Store airtight at room temperature.                                    For chimichurri sauce:                                        Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition.                                                                            Do ahead: Can be made 3 hours ahead. Cover; chill.                                    For beef tenderloin:                                        Let beef stand at room temperature 1 hour.                                                                            Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce.                                                                            *Available at specialty foods stores and from tienda.com."
  };

  render() {    
    return (
      <div>
        <h3>Checkout:</h3>
        <RecipeDetail recipe={this.recipe} />
        <ShoppingList recipe={this.recipe} ingredients={this.props.ingredients} />
      </div>
    )
  }
}



const mapStateToProps = state => ({recipe: state.currentRecipe, ingredients: state.recipes.ingredients });
// const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch);

export const CheckoutContainer = connect(mapStateToProps, null)(Checkout);