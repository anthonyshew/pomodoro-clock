import { WORK_UPDATE, REST_UPDATE } from '../actions/types';

const initialState = {
    work: 5,
    rest: 4
}

export default function(state = initialState, action) {
    switch(action.type) {
        case WORK_UPDATE:
        return {
            ...state,
            work: action.payload
        };
        case REST_UPDATE:
        return {
            ...state,
            rest: action.payload
        };
        default:
            return state;
    }
}