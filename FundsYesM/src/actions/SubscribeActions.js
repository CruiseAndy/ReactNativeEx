/*
 * Date : 2017/12/06
 * Writer : kevin
 */

/* Tools */
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

/* Types */
import {
    SUBSCRIBE_GET_FUNDS_COMPANY_SUCCESS,
    SUBSCRIBE_GET_FUNDS_COMPANY_ERROR,
    SUBSCRIBE_COMPANY_CHANGED,
    SUBSCRIBE_GET_FUNDS_LIST_SUCCESS,
    SUBSCRIBE_GET_FUNDS_LIST_ERROR,
    SUBSCRIBE_FUNDS_NAME_CHANGED,
    SUBSCRIBE_STEP1_COMPLETE,
    SUBSCRIBE_AMOUNT_CHANGED,
    SUBSCRIBE_SELECT_CURRENCY,
    SUBSCRIBE_STEP2_COMPLETE,
    SUBSCRIBE_STEP3_COMPLETE,
    SUBSCRIBE_STEP4_COMPLETE,
} from './types';

/* urls */
const FundCompanys_URL = 'https://rawgit.com/CruiseAndy/d5505fbfc8b5ddd5ec1de4b96356ae9c/raw/0e4dbc9c3d3101e49f3c6c53154928a60f45c871/SubscriptionCompanyList.json';
const FundNames_URL = 'https://rawgit.com/CruiseAndy/e54ce20af0ca7552dd2de86d51d2ad62/raw/02e535c81e33286af94c42f242b24ce0c84e317d/SubscriptionNameList.json';

export const getFundsCompany = () => {
    return dispatch => {
        axios.get(FundCompanys_URL)
            .then( response => {
                dispatch(getFundsCompanySuccess(response.data));
            })
            .catch( error => {
                dispatch(getFundsCompanyError(error));
            })
    }
}

export const getFundsCompanySuccess = data => {

    let companyList = [{ key: 0, section: true, label: '基金公司' }];
    
    for (let key = 0; key < data.CompanyList.length; key++) {
        companyList.push({ key: key + 1, label: data.CompanyList[key] });
    }
    
    return {
        type: SUBSCRIBE_GET_FUNDS_COMPANY_SUCCESS,
        companyList
    }
}

export const getFundsCompanyError = error => {
    return {
        type: SUBSCRIBE_GET_FUNDS_COMPANY_ERROR,
        error
    }
}

export const companyChanged = text => {
    return dispatch => {

        dispatch({
            type: SUBSCRIBE_COMPANY_CHANGED,
            text
        })

        axios.get(FundNames_URL)
            .then( response => {
                dispatch(getFundsListSuccess(response.data));
            })
            .catch( error => {
                dispatch(getFundsListError(error));
            })
    }
}

export const getFundsListSuccess = data => {

    let fundsList = [{ key: 0, section: true, label: '基金名稱' }];
    
    for (let key = 0; key < data.NameList.length; key++) {
        fundsList.push({ key: key + 1, label: data.NameList[key] });
    }
    
    return {
        type: SUBSCRIBE_GET_FUNDS_LIST_SUCCESS,
        fundsList
    }
}

export const getFundsListError = error => {
    return {
        type: SUBSCRIBE_GET_FUNDS_LIST_ERROR,
        error
    }
}

export const fundsChanged = text => {
    return {
        type: SUBSCRIBE_FUNDS_NAME_CHANGED,
        text
    }
}

export const selectedFunds = index => {
    return {
        type: SUBSCRIBE_STEP1_COMPLETE,
        index
    }
}

export const amountChanged = amount => {
    return {
        type: SUBSCRIBE_AMOUNT_CHANGED,
        amount
    }
}

export const selectCurrency = key => {
    return {
        type: SUBSCRIBE_SELECT_CURRENCY,
        key
    }
}

export const inputedData = index => {
    return {
        type: SUBSCRIBE_STEP2_COMPLETE,
        index
    }
}

export const checkedSubscribeData = index => {
    return {
        type: SUBSCRIBE_STEP3_COMPLETE,
        index
    }
}

export const subscribeComplete = index => {
    return {
        type: SUBSCRIBE_STEP4_COMPLETE,
        index
    }
}