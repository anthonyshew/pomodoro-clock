import { RENDER_UPDATE } from '../actions/types';

const initialState = {
    render: 'visible'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case RENDER_UPDATE:
        return {
            ...state,
            render: action.payload
        };
        
        default:
            return state;
    }
}