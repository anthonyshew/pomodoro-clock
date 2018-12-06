import { CLOCK_UPDATE } from '../actions/types';

const initialState = {
    time: 5,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CLOCK_UPDATE:
        return {
            ...state,
            time: action.payload
        };
        default:
            return state;
    }
}