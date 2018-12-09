import { combineReducers } from 'redux';
import makeReducer from './makeReducer';
import renderReducer from './renderReducer';

export default combineReducers({
    makeClock: makeReducer,
    render: renderReducer
});