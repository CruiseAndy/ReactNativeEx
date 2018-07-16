/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const Notice = (props) => {
    return (
        <ScrollView style={[ styles.viewStyle, props.Style ]}>
            {props.children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#fffcd1',
        borderColor: '#e1dda9',
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 200,
    },
});

export { Notice };