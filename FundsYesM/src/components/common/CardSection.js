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
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
});

export { CardSection };