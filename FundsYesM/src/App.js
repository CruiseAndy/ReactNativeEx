/*
 * Date : 2017/11/27
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

/* Reducer */
import { View } from 'react-native';

/* Components */
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    
    // componentWillMount() {
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyA1X68pFEemjCOytD9AKaUB7KPYwpIz6TY",
    //         authDomain: "fundsyesapp.firebaseapp.com",
    //         databaseURL: "https://fundsyesapp.firebaseio.com",
    //         projectId: "fundsyesapp",
    //         storageBucket: "fundsyesapp.appspot.com",
    //         messagingSenderId: "192049549231"
    //     });
    // }

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