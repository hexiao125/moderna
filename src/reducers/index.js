import { combineReducers } from 'redux';
import insuranceReducer from './insuranceReducer';
import displayReducer from './displayReducer';

export default combineReducers({
    insuranceReducer: insuranceReducer,
    displayReducer: displayReducer
});