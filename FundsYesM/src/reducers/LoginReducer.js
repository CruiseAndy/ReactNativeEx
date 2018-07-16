/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Types */
import {
    ID_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    id: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ID_CHANGED:
            return { ...state, id: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, ...INITIAL_STATE, error: '登入失敗' }
        default:
            return state;
    }
}