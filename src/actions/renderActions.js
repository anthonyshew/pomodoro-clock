import { RENDER_UPDATE } from './types';
import store  from '../store';

export const reRender = (visibility) => {

    store.dispatch({
        type: RENDER_UPDATE,
        payload: visibility
    })
}