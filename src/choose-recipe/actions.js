import axios from 'axios';

const BASE_URL = 'http://35.202.210.121/api';

export function selectRecipe (recipeId) {
  const url = `${BASE_URL}/recipes/${recipeId}`
  return dispatch => (
    axios.get(url)
    .then(response => (
      dispatch({type: 'SET_CURRENT_RECIPE', payload: response.data})
    ))
  );
}