import types from '../action_types';
let {
    ACTIVE_FILE
} = types;

export default function(state = {}, action) {
    switch (action.type) {
        case ACTIVE_FILE:
            return action.file;
            break;
        default:
            return state;
    }
}
