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
                    <Text style={styles.textStyle}>
                        Wirte once, Run Everywhere
                    </Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.textStyle}>
                        語法與方法會因為版本，環境會有差異！！！！
                    </Text>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/activityindicator.html')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff' } ]}>
                            {`\u2022 HTML : 與原先的HTML九成五不同`}
                        </Text>
                    </TouchableOpacity>
                </CardSection>
 
                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.oxxostudio.tw/articles/201501/css-flexbox.html')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff' } ]}>
                            {`\u2022 CSS : 寫法不同，語法支援較弱`}
                        </Text>
                    </TouchableOpacity>
                    <Image
                        style={{ width: width - 30 }}
                        source={require('./CSS1.png')}
                        resizeMode='contain' />
                    <Image
                        style={{ width: width - 30 }}
                        source={require('./CSS2.png')}
                        resizeMode='contain' />
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff' } ]}>
                            {`\u2022 React-Native-Router-Flux`}
                        </Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={() => Linking.openURL('https://medium.com/@imranhishaam/advanced-redux-with-react-native-b6e95a686234')}>
                        <Text style={[ styles.textStyle, { color: '#0000ff' } ]}>
                            {`\u2022 React-thunk`}
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