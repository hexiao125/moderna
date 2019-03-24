import { FETCH_INSURANCES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INSURANCES:
            return {
                ...state, 
                insurances: action.payload.insurances,
                logohref: action.payload.embedded.logo.href,
                rootURL: action.payload.meta.root
            };

        default:
            return state;
    }
}