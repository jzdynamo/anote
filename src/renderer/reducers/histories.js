// use history array replace url history and url
import types from '../action_types';
let {
    POP_HISTORY,
    PUSH_HISTORY
} = types;

const defaultHome = {
  containerName: 'BooksContainer',
  props: {}
};

export default function(state = [defaultHome], action) {
  switch (action.type) {
    case PUSH_HISTORY:
      return [...state, action.history].slice(-10);
      break;
    case POP_HISTORY:
      return state.slice(0, state.length - 1);
      break;
    default:
      return state;
  }
}
