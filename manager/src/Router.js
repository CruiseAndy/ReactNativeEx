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


// import {
//     Scene,
//     Router,
//     Actions,
//     Reducer,
//     ActionConst,
//     Overlay,
//     Tabs,
//     Modal,
//     Drawer,
//     Stack,
//     Lightbox,
//   } from 'react-native-router-flux';

// const reducerCreate = params => {
//     const defaultReducer = new Reducer(params);
//         return (state, action) => {
//         console.log('ACTION:', action);
//         return defaultReducer(state, action);
//     };
// };

// const getSceneStyle = () => ({
//     backgroundColor: '#F5FCFF',
//     shadowOpacity: 1,
//     shadowRadius: 3,
// });

// on Android, the URI prefix typically contains a host in addition to scheme
// const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const RouterComponent = () => {
    return (
        // <Router
        //     getSceneStyle={getSceneStyle}
        //     uriPrefix={prefix}
        // >
        //     <Overlay key="overlay">
        //         <Modal key="modal"
        //             hideNavBar
        //         >
        //             <Lightbox key="lightbox">
        //                 <Stack
                            
        //                     key="root"
        //                     titleStyle={{ alignSelf: 'center' }}
        //                 >
        //                     <Scene key="LoginForm" component={LoginForm} title="Please Login" initial />
        //                 </Stack>
        //             </Lightbox>
        //     <Stack key="main">
        //         <Scene key="employeeList" component={EmployeeList} title="Employees" />
        //     </Stack>
        //         </Modal>
        //     </Overlay>
        // </Router>
      
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
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;