import { combineReducers } from 'redux';
import makeReducer from './makeReducer';

export default combineReducers({
    makeClock: makeReducer
});