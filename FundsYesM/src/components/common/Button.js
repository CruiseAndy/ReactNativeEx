import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textSytle } = styles;

    return (
        <TouchableOpacity style={[buttonStyle, props.style]} onPress={props.onPress}>
            <Text style={[textSytle, props.textStyle]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textSytle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        padding: 15,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#db524c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#5d1c19',
    }
}

export { Button };