import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export function selectRecipe (recipeId) {
  const url = `${BASE_URL}/recipes?recipeId=${recipeId}`
  return dispatch => (
    axios.get(url)
    .then(response => (
      dispatch({type: 'SET_CURRENT_RECIPE', payload: response.data})
    ))
  );
}