import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import recipesReducer from './home/reducer';
import currentRecipeReducer from './choose-recipe/reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  currentRecipe: currentRecipeReducer
})

export default rootReducer