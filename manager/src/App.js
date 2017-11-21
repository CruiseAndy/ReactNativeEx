import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View } from 'react-native';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBREE-ilp1Ze_Ctx4pJ5_wl1siLr8rsXyI",
            authDomain: "manager-8903e.firebaseapp.com",
            databaseURL: "https://manager-8903e.firebaseio.com",
            projectId: "manager-8903e",
            storageBucket: "manager-8903e.appspot.com",
            messagingSenderId: "462634506687"
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <View>
                    <Header headerText='Manager' />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;