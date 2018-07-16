import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Input } from './common';


import { connect } from 'react-redux';

import { num1Changed, num2Changed,addSum } from '../actions';

class Calculate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: false,
            num2: false,
        }
    }

    _num1Changed = val => {
        this.props.num1Changed(val);
        if (val !== "")
            this.setState({ num1: true })
        else
            this.setState({ num1: false })
    }
    
    _num2Changed = val => {
        this.props.num2Changed(val);
        if (val !== "")
            this.setState({ num2: true })
        else
            this.setState({ num2: false })
    }

    _showButton = () => {
        if (this.state.num1 && this.state.num2) { 
            return(
                <CardSection>
                    <Button onPress={() => this._calculateBtn(this.props.SumData.num1, this.props.SumData.num2)}>
                        Calculate
                    </Button>
                </CardSection>
            );
        }
    }

    _calculateBtn = (num1, num2) => {

        this.props.addSum(this.props.SumData.num1, this.props.SumData.num2)

        let sumResult = Number(num1) + Number(num2);

        if (sumResult > 10) {
            Actions.test()
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Num1"
                        placeholder="Num"
                        value={this.props.SumData.num1}
                        onChangeText={value => this._num1Changed(value)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Num2"
                        placeholder="Num"
                        value={this.props.SumData.num2}
                        onChangeText={value => this._num2Changed(value)}
                    />
                </CardSection>

                {this._showButton()}

                <CardSection>
                    <Input
                        label="Result"
                        placeholder="Sum"
                        value={this.props.SumData.sum}
                    />
                </CardSection>
            </Card>
        );
    }
};


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    console.log(state);
    // return object
    return state;
}

export default connect(mapStateToProps, {
    num1Changed, num2Changed, addSum
})(Calculate);