/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

/* Types */
import {
    FUNDSDATA_SHORT_CHANGED,
    FUNDSDATA_GET_DATA_SUCCESS,
    FUNDSDATA_GET_DATA_ERROR,
} from './types';

/* urls */
const FundsData_URL = 'https://rawgit.com/CruiseAndy/a526793ae9a828f9be92e3614366178f/raw/35e6dcf3d99feb511e1eb62565ac75c1c35467a4/FundOverview.json';
const testAPI = 'http://192.168.5.8/Fundsyes/FundsYes/test/123';

export const sortChanged = index => {
    return {
        type: FUNDSDATA_SHORT_CHANGED,
        payload: index,
    }
}

export const getFundsData = () => {
    return dispatch => {
        axios.get(FundsData_URL)
            .then( response => {
                dispatch(getFundsDataSuccess(response.data));
            })
            .catch( error => {
                dispatch(getFundsDataError(error));
            })
    }
}

export const getFundsDataSuccess = data => {
    return {
        type: FUNDSDATA_GET_DATA_SUCCESS,
        data
    }
}

export const getFundsDataError = error => {
    return {
        type: FUNDSDATA_GET_DATA_ERROR,
        error
    }
}