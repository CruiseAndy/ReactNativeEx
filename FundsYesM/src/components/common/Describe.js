/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Describe = ({ children }) => {
    return (
        <View style={styles.viewStyle}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
    },
});

export { Describe };