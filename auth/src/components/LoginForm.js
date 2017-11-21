import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch(() => this.onLoginFail());
            });
    }

    onLoginFail() {
        console.log('login fail');
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        console.log('login success');
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading === true) {
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@mail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email }) }
                        style={{ height: 20, width: 100 }}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password }) }
                        style={{ height: 20, width: 100 }}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;