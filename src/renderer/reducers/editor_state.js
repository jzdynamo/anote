import types from '../action_types';
let { SET_EDITOR_STATE } = types;

export default function (state=0, action) {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return action.state;
      break;
    default:
      return state;
  }
}
