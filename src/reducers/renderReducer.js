import { RENDER_UPDATE } from '../actions/types';

const initialState = {
    render: 'visible',
    isWorking: false,
    isResting: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case RENDER_UPDATE:
        return {
            ...state,
            render: action.payload,
            isWorking: action.isWorking,
            isResting: action.isResting
        };
        
        default:
            return state;
    }
}