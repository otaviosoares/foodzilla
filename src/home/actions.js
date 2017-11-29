import axios from "axios";

const BASE_URL = "http://35.202.210.121/api";

export function searchForRecipes (terms) {
  const url = `${BASE_URL}/recipes/?ingredients=${terms}`
  return dispatch => (
    axios.get(url)
    .then(response => {
      dispatch({type: "LOAD_RECIPES", payload: response.data})
      dispatch({type: "SET_INGREDIENTS", payload: terms})
    })
  );
}