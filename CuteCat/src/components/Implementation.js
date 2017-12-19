/*
 * Date : 2017/12/15
 * Writer : kevin
 */

 /* Tools */
import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Image,
} from 'react-native';

/* Components */
import { Card, CardSection } from './common';

const { width, height } = Dimensions.get('window');

class ReviewReact extends Component {
    render() {
        return (
            <Card style={{ height }}>
                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/file/d/1Lhbas36VE-ep0gnM5riGWt0UYAYOyUP_/view?usp=sharing')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff' } ]}>
                            {`\u2022 Implementation App`}
                        </Text>
                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
}
 
 const styles = StyleSheet.create({
     textStyle: {
         fontSize: 20,
     }
 })
  
 export default ReviewReact;