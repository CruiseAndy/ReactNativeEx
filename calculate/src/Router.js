import React from 'react';
import { Platform } from 'react-native';
import {
    Scene,
    Router,
    Stack,
    Actions,
    ActionConst,
} from 'react-native-router-flux';

import Calculate from './components/Calculate';
import Test from './components/test';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene
                    init
                    key="calculate"
                    component={Calculate}
                    title="Calculate"
                />
                <Scene
                    key="test"
                    component={Test}
                    title="Test"
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;