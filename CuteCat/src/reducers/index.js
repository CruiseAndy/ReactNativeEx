/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import { combineReducers } from 'redux';

/* Reducers */
import LoginReducer from './LoginReducer';

export default combineReducers({
    login: LoginReducer,
});