/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import { combineReducers } from 'redux';

/* Reducers */
import SumReducer from './sumReducer';


export default combineReducers({
    SumData: SumReducer
});