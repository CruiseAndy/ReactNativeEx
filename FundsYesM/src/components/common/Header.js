// Import libraries for making a component
import React from 'react';
import { Text, View , Button } from 'react-native';
import Drawer from 'react-native-drawer';


// Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Button title="選單"></Button>
            
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}


// Make the component available to other parts of the app
export { Header };