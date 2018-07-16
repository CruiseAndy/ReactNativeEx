/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import { combineReducers } from 'redux';

/* Reducers */
import LoginReducer from './LoginReducer';
import ForgetPwdReducer from './ForgetPwdReducer';
import FundsDataReducer from './FundsDataReducer';
import SubscribeReducer from './SubscribeReducer';
import HeaderReducer from './HeaderReducer'
export default combineReducers({
    login: LoginReducer,
    forgetPwd: ForgetPwdReducer,
    fundsData: FundsDataReducer,
    subscribeData: SubscribeReducer,
    menu : HeaderReducer
});