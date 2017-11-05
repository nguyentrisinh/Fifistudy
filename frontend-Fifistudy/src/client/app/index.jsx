import React from 'react';

import SliderBanner from './components/SliderBanner.jsx';
import '../static/css/index.scss';
import Index from './pages/Index.jsx';
import {Provider} from "react-redux";
import FilmIntroContainer from './pages/FilmIntroContainer'
import ListPage from "./pages/ListPage"

import reducer from "./reducers/app";
import {applyMiddleware, createStore} from "redux";
import {render} from 'react-dom';

import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, hashHistory, Router, IndexRoute, Route} from 'react-router';
import App from './App';
import DetailPage from './pages/Detail'

import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<Route component={FooterContainer}>*/}
                <IndexRoute component={Index}/>
                <Route path="detail" component={DetailPage}/>

                <Route path="film/:slug" component={FilmIntroContainer}/>
                <Route path="list" component={ListPage}/>
            </Route>
        </Router>
    </Provider>


    , document.getElementById('app'));
// registerServiceWorker();
