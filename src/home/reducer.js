function load_recipes(state, payload) {
  return {...state, all: payload}
}

function set_ingredients(state, payload) {
  return {...state, ingredients: payload}
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'LOAD_RECIPES':
    return load_recipes(state, action.payload);
  case 'SET_INGREDIENTS':
    return set_ingredients(state, action.payload)
  default:
    return state;
  }
}