function set(state, payload) {
  state = payload;
  return state;
}

export default function(state = [], action) {
  switch (action.type) {
  case 'SET_CURRENT_RECIPE':
    return set(state, action.payload);
  default:
    return state;
  }
}