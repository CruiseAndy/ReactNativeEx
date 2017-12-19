import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle,  } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        marginBottom: 10,
    }
}

export { Input };