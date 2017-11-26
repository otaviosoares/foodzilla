import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export function searchForRecipes (terms) {
  const url = `${BASE_URL}/recipes?terms=${terms}`
  return dispatch => 
    axios.get(url)
    .then(response => {
      dispatch({type: 'LOAD_RECIPES', payload: response.data})
    })
}