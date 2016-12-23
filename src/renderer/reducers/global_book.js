import types from '../action_types';
let {
    SET_GLOBAL_BOOK
} = types;

export default function (state={}, action) {
  switch (action.type) {
    case SET_GLOBAL_BOOK:
      return action.globalBook;
      break;
    default:
      return state;
  }
}
