import React, { Component } from 'react';
import {StatusBar, View} from 'react-native';
import DrawerApp from './Navigators/DrawerApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden />
                <Provider store={store}>
                    <DrawerApp />
                </Provider>
            </View>
        )
    }
}

export default App;