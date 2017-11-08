import React from 'react';

import SliderBanner from './containers/SliderBanner.jsx';
import '../static/css/index.scss';
import Index from './containers/Index.jsx';
import {Provider} from "react-redux";
import FilmIntro from './containers/FilmIntro'
import ListPage from "./containers/ListPage"

import reducer from "./reducers/app";
import {applyMiddleware, createStore} from "redux";
import {render} from 'react-dom';
import {browserHistory, hashHistory, Router, IndexRoute, Route} from 'react-router';
import App from './App';
import DetailPage from './containers/Detail'

import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<Route component={FooterContainer}>*/}
                <IndexRoute component={Index}/>
                <Route path="/detail" component={DetailPage}/>

                <Route path="/intro" component={FilmIntro}/>
                <Route path="/list" component={ListPage}/>
            </Route>
        </Router>
    </Provider>


    , document.getElementById('app'));
// registerServiceWorker();
