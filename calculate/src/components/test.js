import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

import { connect } from 'react-redux';

class Test extends Component{
    render() {
        return(
            <View>
                <Text>{this.props.SumData.sum}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {})(Test);