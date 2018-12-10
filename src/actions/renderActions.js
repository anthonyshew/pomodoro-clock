import { RENDER_UPDATE } from './types';
import store  from '../store';

export const reRender = (visibility, isWorking, isResting) => {

    store.dispatch({
        type: RENDER_UPDATE,
        payload: visibility,
        isWorking: isWorking,
        isResting: isResting
    })
}