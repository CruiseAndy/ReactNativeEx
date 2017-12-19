/*
 * Date : 2017/12/15
 * Writer : kevin
 */

 /* Tools */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
 
/* Components */
import { Card, CardSection } from './common';

const { height } = Dimensions.get('window');
 
class Outline extends Component {
    render() {
        return (
            <Card style={{ height }}>
                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Review React`}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Diff React && React Native`}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Implementation`}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Building Android`}
                    </Text>
                </CardSection>


                {/* <CardSection>
                    <Button onPress={() => Actions.flatlist()}>
                        FlatList Component
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => Actions.sceneDemo1()}>
                        Scene Demo 1
                    </Button>
                </CardSection> */}
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }
})
 
export default Outline;