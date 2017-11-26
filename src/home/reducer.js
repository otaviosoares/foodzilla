function load_recipes(state, payload) {
  state = payload;
  return state;
}

export default function(state = [], action) {
  switch (action.type) {
  case 'LOAD_RECIPES':
    return load_recipes(state, action.payload);
  default:
    return state;
  }
}