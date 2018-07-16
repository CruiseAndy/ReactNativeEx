/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Types */
import {
    FORGETPWD_INITCALENDAR,
    FORGETPWD_ID_CHANGED,
    FORGETPWD_YEAR_CHANGED,
    FORGETPWD_MONTH_CHANGED,
    FORGETPWD_DAY_CHANGED,
    FORGETPWD_EMAIL_CHANGED,
    FORGETPWD_SEND_DATA,
    FORGETPWD_BACK_OUT
} from '../actions/types';

const INITIAL_STATE = {
    calendar: {},
    id: '',
    year: '請選擇',
    month: '請選擇',
    day: '請選擇',
    email: '',
    sending: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORGETPWD_INITCALENDAR:
            return { ...state, calendar: action.payload };
        case FORGETPWD_ID_CHANGED:
            return { ...state, id: action.payload };
        case FORGETPWD_YEAR_CHANGED:
            return { ...state, year: action.payload };
        case FORGETPWD_MONTH_CHANGED:
            return { ...state, month: action.payload };
        case FORGETPWD_DAY_CHANGED:
            return { ...state, day: action.payload };
        case FORGETPWD_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case FORGETPWD_SEND_DATA:
            return { ...state, ...INITIAL_STATE, sending: true };
        case FORGETPWD_BACK_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
}