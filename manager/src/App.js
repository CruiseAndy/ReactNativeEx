import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View } from 'react-native';

import reducers from './reducers';
import Router from './Router';

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

        // ref : https://github.com/reactjs/react-redux/releases/tag/v2.0.0
        if (module.hot) {
            module.hot.accept('./reducers', () => {
                const nextRootReducer = require('./reducers/index');
                store.replaceReducer(nextRootReducer);
            });
        }
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;