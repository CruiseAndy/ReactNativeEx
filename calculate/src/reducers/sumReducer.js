/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Types */
import {
    NUM1_CHANGED,
    NUM2_CHANGED,
    ADD_SUM,
} from '../actions/types';

const INITIAL_STATE = {
    num1: '',
    num2: '',
    sum: '',
};

// update store
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NUM1_CHANGED:
            return { ...state, num1: action.num1 };
        case NUM2_CHANGED:
            return { ...state, num2: action.num2 };
        case ADD_SUM:
            return { ...state, sum: action.sum };
        default:
            return state;
    }
}