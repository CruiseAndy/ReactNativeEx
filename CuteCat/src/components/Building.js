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
                    <TouchableOpacity onPress={() => Linking.openURL('http://blog.techbridge.cc/2016/09/10/react-native-redux-android-firebase/')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff', fontSize: 26 } ]}>
                            On Simulator
                        </Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Install Node.js & react-native-cli`}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        Android
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Install JDK & Android Studio & Genymotion`}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        iOS
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        {`\u2022 Install Xcode`}
                    </Text>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/running-on-device.html')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff', fontSize: 26 } ]}>
                            On Device Use USB
                        </Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://ithelp.ithome.com.tw/articles/10188858')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff', fontSize: 26 } ]}>
                            On Device Use APK (android)
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