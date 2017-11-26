import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import recipesReducer from './home/reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer
})

export default rootReducer