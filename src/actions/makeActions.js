import { WORK_UPDATE, REST_UPDATE } from './types';
import store  from '../store';

export const workSet = (work) => {
    store.dispatch({
        type: WORK_UPDATE,
        payload: work
    })
}

export const restSet = (rest) => {
    store.dispatch({
        type: REST_UPDATE,
        payload: rest
    })
}