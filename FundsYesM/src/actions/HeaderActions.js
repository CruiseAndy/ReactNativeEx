// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

/* Types */
import { MENUOPEN } from './types';

export const menuOpenChange = isOpen => {
    debugger
    return {
        type: MENUOPEN,
        payload: isOpen
    }
};