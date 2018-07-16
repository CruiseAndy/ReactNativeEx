import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import Router from './Router';
import reducers from './reducers';

class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(promise));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;