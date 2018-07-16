/*
 * Header type
 */
export const MENUOPEN = "menuOpen";

/**
 * Login type
 */
export const ID_CHANGED = 'id_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER = 'login_user';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';

/**
 * Forget passsword type
 */
export const FORGETPWD_INITCALENDAR = 'forget_initcalendar';
export const FORGETPWD_ID_CHANGED = 'forget_id_changed';
export const FORGETPWD_YEAR_CHANGED = 'forget_year_changed';
export const FORGETPWD_MONTH_CHANGED = 'forget_month_changed';
export const FORGETPWD_DAY_CHANGED = 'forget_day_changed';
export const FORGETPWD_EMAIL_CHANGED = 'forget_email_changed';
export const FORGETPWD_SEND_DATA = 'forgetpwd_send_data';
export const FORGETPWD_BACK_OUT = 'forgetpwd_back_out';

/**
 * Funds data type
 */
export const FUNDSDATA_SHORT_CHANGED = 'fundsdata_sort_changed';
export const FUNDSDATA_GET_DATA_SUCCESS = 'fundsdata_get_data_success';
export const FUNDSDATA_GET_DATA_ERROR = 'fundsdata_get_data_error';

/**
 * Subscribe funds
 */
// Step 1
export const SUBSCRIBE_GET_FUNDS_COMPANY_SUCCESS = 'subscribe_get_funds_company_success';
export const SUBSCRIBE_GET_FUNDS_COMPANY_ERROR = 'subscribe_get_funds_company_error';
export const SUBSCRIBE_COMPANY_CHANGED = 'subscribe_company_changed';
export const SUBSCRIBE_GET_FUNDS_LIST_SUCCESS = 'subscribe_get_funds_list_success';
export const SUBSCRIBE_GET_FUNDS_LIST_ERROR = 'subscribe_get_funds_list_error';
export const SUBSCRIBE_FUNDS_NAME_CHANGED = 'subscribe_funds_name_changed';
export const SUBSCRIBE_STEP1_COMPLETE = 'subscribe_step1_complete';
// Step 2
export const SUBSCRIBE_AMOUNT_CHANGED = 'subscribe_amount_changed';
export const SUBSCRIBE_SELECT_CURRENCY = 'subscribe_select_currency';
export const SUBSCRIBE_STEP2_COMPLETE = 'subscribe_step2_complete';
// Step 3
export const SUBSCRIBE_STEP3_COMPLETE = 'subscribe_step3_complete';
// Step 4
export const SUBSCRIBE_STEP4_COMPLETE = 'subscribe_step4_complete';