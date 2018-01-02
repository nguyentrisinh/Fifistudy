import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Screen from './Screen.js';
import {store} from './Redux.js';
//import store and provider from react-redux, then pass store like a prop to provider
//Then put screen that contain component below provider
export default class App extends Component {
    render() {
        console.log(store);
        return (
            <Provider store={store}>
                <Screen />
            </Provider>
        )
    }
}
