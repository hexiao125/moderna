import api from '../apis/api';
import { FETCH_INSURANCES , DISPLAY_TOGGLE } from './types';

export const fetchInsurances = () => async dispatch => {
    const response = await api.get('/insurances');

    dispatch({ type: FETCH_INSURANCES, payload: response.data });
};

export const displayToggle = () => {
    return {
        type: DISPLAY_TOGGLE
    };
}; 

