import {combineReducers} from 'redux';

import reducer from './Reducer';
import screenHome from './screenHome';
import screenMovie from './screenMovie';
import screenWatchMovie from './screenWatchMovie';

const rootReducer = combineReducers({
    reducer,
    screenHome,
    screenMovie,
    screenWatchMovie
})

export default rootReducer