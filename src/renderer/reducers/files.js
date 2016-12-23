import types from '../action_types';
import {
    findIndexById
} from '../../utils/foundation';
let {
    LIST_FILES,
    ADD_FILE,
    DEL_FILE,
    EDIT_FILE, CONCAT_FILES } = types;

export default function (state=[], action) {
  switch (action.type) {
    case LIST_FILES:
      return action.files;
      break;
    case ADD_FILE:
      return [
        action.file,
        ...state
      ];
      break;
    case DEL_FILE:
      let tI = findIndexById(state, action.file);
      return [
        ...state.slice(0, tI),
        ...state.slice(tI+1)
      ];
      break;
    case EDIT_FILE:
      let tIn = findIndexById(state, action.file);
      return [
        action.file,
        ...state.slice(0, tIn),
        ...state.slice(tIn+1)
      ];
      break;
    case CONCAT_FILES:
      return [
        ...state,
        ...action.files
      ];
      break;
    default:
      return state;
  }
}
