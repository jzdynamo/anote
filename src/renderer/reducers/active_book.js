import types from '../action_types';
let {
    ACTIVE_BOOK
} = types;

export default function (state={}, action){
  switch (action.type) {
    case ACTIVE_BOOK:
      return action.book;
      break;
    default:
      return state;
  }
}
