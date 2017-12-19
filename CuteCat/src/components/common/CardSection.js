import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[style.containerStyle, props.style]}>
            {props.children}
        </View>
    );
}

const style = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export { CardSection };