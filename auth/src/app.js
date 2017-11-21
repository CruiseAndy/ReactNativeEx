import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

// Get rid of “Remote debugger is in a background tab” warning in React Native
console.ignoredYellowBox = ['Remote debugger'];

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCIQJ-hYqM3kBb_de4mQsPwj2vEzaDg7CU",
            authDomain: "authentication-6b795.firebaseapp.com",
            databaseURL: "https://authentication-6b795.firebaseio.com",
            projectId: "authentication-6b795",
            storageBucket: "authentication-6b795.appspot.com",
            messagingSenderId: "716143485055"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;