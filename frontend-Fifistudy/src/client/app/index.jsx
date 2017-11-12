import React from 'react';

import SliderBanner from './components/SliderBanner.jsx';
import {CookiesProvider} from 'react-cookie';
import '../static/css/index.scss';
import {Provider} from "react-redux";
import ListPage from "./pages/ListPage"

import reducer from "./reducers/app";
import {applyMiddleware, createStore} from "redux";
import {render} from 'react-dom';
import App from './App';

import reduxThunk from "redux-thunk";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </Provider>


    , document.getElementById('app'));
// registerServiceWorker();
