import React from 'react';
import { Platform } from 'react-native';
import {
    Scene,
    Router,
    Stack,
    Actions,
    ActionConst,
} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                />
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    type={ActionConst.RESET}
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                    type={ActionConst.RESET}
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;