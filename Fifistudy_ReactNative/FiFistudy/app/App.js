import React, { Component } from 'react';
import DrawerApp from './Navigators/DrawerApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <DrawerApp />
            </Provider>
        )
    }
}

export default App;