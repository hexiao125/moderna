import { DISPLAY_TOGGLE } from '../actions/types';

const INITIAL_STATE = {
    displayMoreOn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_TOGGLE:
            return {...state, displayMoreOn: !state.displayMoreOn};
        default:
            return state;
    }
}