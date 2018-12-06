import { CLOCK_UPDATE } from './types';
import store  from '../store';

export const timeSet = (num) => {
    store.dispatch({
        type: CLOCK_UPDATE,
        payload: num
    })
}