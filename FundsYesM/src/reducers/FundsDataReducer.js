/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Types */
import {
    FUNDSDATA_SHORT_CHANGED,
    FUNDSDATA_GET_DATA_SUCCESS,
    FUNDSDATA_GET_DATA_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    sortIndex: 0,
    data: null,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FUNDSDATA_SHORT_CHANGED:
            return { ...state, sortIndex: action.payload };
        case FUNDSDATA_GET_DATA_SUCCESS:
            return { ...state, data: action.data, error: '' };
        case FUNDSDATA_GET_DATA_ERROR:
            return { ...state, data: null, error: action.error };
        default:
            return state;
    }
}