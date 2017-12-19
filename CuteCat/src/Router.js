/*
 * Date : 2017/11/27
 * Writer : kevin
 */

/* Tools */
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

/* Component */
import {
    Scene,
    Router,
    Stack,
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import Outline from './components/Outline';
import ReviewReact from './components/ReviewReact';
import Different from './components/Different';
import Implementation from './components/Implementation';
import Building from './components/Building';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: '#fff' }}>
            <Stack>
                <Scene
                    init
                    key="outline"
                    component={Outline}
                    title="Outline"
                    titleStyle={styles.titleStyle}
                    rightTitle="Next"
                    onRight={() => Actions.reviewReact()}
                />
                <Scene
                    key="reviewReact"
                    component={ReviewReact}
                    title="Review React"
                    titleStyle={styles.titleStyle}
                    rightTitle="Next"
                    onRight={() => Actions.different()}
                />
                <Scene
                    key="different"
                    component={Different}
                    title="React & RN"
                    titleStyle={styles.titleStyle}
                    rightTitle="Next"
                    onRight={() => Actions.implementation()}
                />
                <Scene
                    key="implementation"
                    component={Implementation}
                    title="Implementation"
                    titleStyle={styles.titleStyle}
                    rightTitle="Next"
                    onRight={() => Actions.build()}
                />
                <Scene
                    key="build"
                    component={Building}
                    title="Building"
                    titleStyle={styles.titleStyle}
                />
            </Stack>
        </Router>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25
    }
})

export default RouterComponent;