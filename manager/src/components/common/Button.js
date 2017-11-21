import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textSytle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={textSytle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textSytle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export { Button };