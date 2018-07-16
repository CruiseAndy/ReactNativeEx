/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';

/* Components */
import {
    Text,
    View,
    Dimensions,
} from 'react-native';

const Footer = props => {
    const {
        containerStyle,
    } = styles;

    const { width, height } = Dimensions.get('window');

    return(
        <View style={{
            ...containerStyle,
            top: height - (props.height || 100),
            width,
            height: props.height,
            ...props.style }}
        >
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
    }
}

export { Footer };