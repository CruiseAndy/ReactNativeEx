/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import { Actions } from 'react-native-router-flux';

/* Types */
import {
    FORGETPWD_INITCALENDAR,
    FORGETPWD_ID_CHANGED,
    FORGETPWD_YEAR_CHANGED,
    FORGETPWD_MONTH_CHANGED,
    FORGETPWD_DAY_CHANGED,
    FORGETPWD_EMAIL_CHANGED,
    FORGETPWD_SEND_DATA,
    FORGETPWD_BACK_OUT,
} from './types';

export const initCalendar = () => {

    /* Initial array of year, month */
    const nowYear = new Date().getFullYear();
    let yearList = [{ key: 0, section: true, label: '年份' }];

    for (let key = 1911; key < nowYear; key++) {
        yearList.push({ key, label: key })
    }

    let monthList = [{ key: 0, section: true, label: '月份' }]

    for (let key = 1; key <= 12; key++) {
        monthList.push({ key, label: key })
    }

    let dayList = [{ key: 0, section: true, label: '日期' }]

    for (let key = 1; key <= 31; key++) {
        dayList.push({ key, label: key })
    }

    return {
        type: FORGETPWD_INITCALENDAR,
        payload: { yearList, monthList, dayList }
    }
}

export const idChanged = text => {
    return {
        type: FORGETPWD_ID_CHANGED,
        payload: text
    }
}

export const yearChanged = text => {
    return {
        type: FORGETPWD_YEAR_CHANGED,
        payload: text
    }
}

export const monthChanged = text => {
    return {
        type: FORGETPWD_MONTH_CHANGED,
        payload: text
    }
}

export const dayChanged = text => {
    return {
        type: FORGETPWD_DAY_CHANGED,
        payload: text
    }
}

export const emailChanged = text => {
    return {
        type: FORGETPWD_EMAIL_CHANGED,
        payload: text
    }
}

export const sendData = data => {
    return (dispatch) => {
        dispatch({ type: FORGETPWD_SEND_DATA });
    }
}

export const backingOut = () => {
    return dispatch => {
        dispatch({ type: FORGETPWD_BACK_OUT });
        Actions.login();
    }
}