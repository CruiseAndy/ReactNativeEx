/*
 * Date : 2017/12/15
 * Writer : kevin
 */

 /* Tools */
 import React, { Component } from 'react';
 import {
     Text,
     Dimensions,
     StyleSheet
 } from 'react-native';
  
 /* Components */
 import { Card, CardSection } from './common';
 
 const { height } = Dimensions.get('window');
  
 class ReviewReact extends Component {
     render() {
         return (
             <Card style={{ height }}>
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 JSX`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 ES6`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 Redux`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 React-router`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 React-promise`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 Webpack`}
                     </Text>
                 </CardSection>
 
                 <CardSection>
                     <Text style={styles.textStyle}>
                         {`\u2022 Babel`}
                     </Text>
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