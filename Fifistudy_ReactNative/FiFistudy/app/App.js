import React, { Component } from 'react';
import DrawerApp from './Navigators/DrawerApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';
console.disableYellowBox = true;

const isTest = true;

class App extends Component {
    render() {
        const screens = isTest ? <TestScreen /> : <DrawerApp />
        return (
            <Provider store={store}>
                {screens}
            </Provider>
        )
    }
}

export default App;