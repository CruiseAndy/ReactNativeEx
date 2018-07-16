/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

/* Types */
import {
    ID_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const identityChanged = text => {
    return {
        type: ID_CHANGED,
        payload: text
    }
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ id, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(id, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    }
}

const loginUserFail = dispatch => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.fundsData();
}