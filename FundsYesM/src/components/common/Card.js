import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <ScrollView style={[styles.constainerStyle, props.style]}>
            {props.children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    constainerStyle: {
        marginTop: 66,
        zIndex: -10,
    }
});

export { Card };