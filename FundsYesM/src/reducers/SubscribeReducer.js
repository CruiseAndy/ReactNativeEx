/*
 * Date : 2017/12/06
 * Writer : kevin
 */

/* Types */
import {
    // Step 1
    SUBSCRIBE_GET_FUNDS_COMPANY_SUCCESS,
    SUBSCRIBE_GET_FUNDS_COMPANY_ERROR,
    SUBSCRIBE_COMPANY_CHANGED,
    SUBSCRIBE_GET_FUNDS_LIST_SUCCESS,
    SUBSCRIBE_GET_FUNDS_LIST_ERROR,
    SUBSCRIBE_FUNDS_NAME_CHANGED,
    SUBSCRIBE_STEP1_COMPLETE,
    // Step 2
    SUBSCRIBE_AMOUNT_CHANGED,
    SUBSCRIBE_SELECT_CURRENCY,
    SUBSCRIBE_STEP2_COMPLETE,
    // Step 3
    SUBSCRIBE_STEP3_COMPLETE,
    // Step 4
    SUBSCRIBE_STEP4_COMPLETE,
} from '../actions/types';

const INITIAL_STATE = {
    stepIndex: 0,
    companyList: [],
    error: '',
    companyName: '請選擇',
    fundsList: [],
    fundsName: '',
    fundsSelectorDisable: true,
    amount: '',
    currency: null, // 0:台幣, 1:外幣
    account: '',
    bank: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Step 1
        case SUBSCRIBE_GET_FUNDS_COMPANY_SUCCESS:
            return { ...state, companyList: action.companyList, error: '' };
        case SUBSCRIBE_GET_FUNDS_COMPANY_ERROR:
            return { ...state, companyList: [], error: action.error };
        case SUBSCRIBE_COMPANY_CHANGED:
            return { ...state, companyName: action.text, fundsName: '請選擇', fundsSelectorDisable: false };
        case SUBSCRIBE_GET_FUNDS_LIST_SUCCESS:
            return { ...state, fundsList: action.fundsList, error: '' };
        case SUBSCRIBE_GET_FUNDS_LIST_ERROR:
            return { ...state, fundsList: [], error: action.error };
        case SUBSCRIBE_FUNDS_NAME_CHANGED:
            return { ...state, fundsName: action.text };
        case SUBSCRIBE_STEP1_COMPLETE:
            if ( /請選擇/.test(state.companyName) || /請選擇/.test(state.fundsName) || state.fundsName === '' )
                return { ...state, error: c };
            else
                return { ...state, stepIndex: action.index, error: '' };
        // Step 2
        case SUBSCRIBE_AMOUNT_CHANGED:
            if (/^\d+$/.test(action.amount))
                return { ...state, amount: action.amount };
            else
                return state;
        case SUBSCRIBE_SELECT_CURRENCY:
            return { ...state, currency: action.key, account: '1550╳╳╳╳4567', bank: '國泰世華商業銀行' };
        case SUBSCRIBE_STEP2_COMPLETE:
            if (state.amount === '' || state.currency == null)
                return { ...state, error: '資料不完全' };
            else
                return { ...state, stepIndex: action.index, error: '' };
        case SUBSCRIBE_STEP3_COMPLETE:
            return { ...state, stepIndex: action.index, error: '' };
        case SUBSCRIBE_STEP4_COMPLETE:
            return { ...state, ...INITIAL_STATE, stepIndex: action.index };
        default:
            return state;
    }
}