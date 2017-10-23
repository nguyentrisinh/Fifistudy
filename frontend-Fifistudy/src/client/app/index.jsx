import React from 'react';

import SliderBanner from './SliderBanner.jsx';
import '../static/css/index.scss';

import {Provider} from "react-redux";

import reducer from "./reducers/app";
import {applyMiddleware, createStore} from "redux";
import {render} from 'react-dom';
import {browserHistory,Router,IndexRoute, Route} from 'react-router';
import App from './App'

import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<Route component={FooterContainer}>*/}
                <IndexRoute component={SliderBanner}/>

            </Route>
        </Router>
    </Provider>


    , document.getElementById('app'));
// registerServiceWorker();
