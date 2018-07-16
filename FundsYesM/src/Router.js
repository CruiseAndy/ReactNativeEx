/*
 * Date : 2017/11/27
 * Writer : kevin
 */

/* Tools */
import React from 'react';
import { Platform } from 'react-native';

/* Component */
import {
    Scene,
    Router,
    Stack,
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import HomePage from './components/homePage/HomePage';
import Login from './components/Login';
import ForgetPwd from './components/ForgetPwd';
import FundsData from './components/fundsData/FundsData';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#fff' }}>
            <Stack>
                <Scene
                    hideNavBar
                    key="home"
                    component={HomePage}
                    type={ActionConst.RESET}
                />
                <Scene
                    hideNavBar
                    key="login"
                    component={Login}
                    type={ActionConst.RESET}
                />
                <Scene
                    hideNavBar
                    key="forgetPwd"
                    component={ForgetPwd}
                    type={ActionConst.RESET}
                />
                <Scene
                    hideNavBar
                    key="fundsData"
                    component={FundsData}
                    type={ActionConst.RESET}
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;