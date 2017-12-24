import {combineReducers} from 'redux';

import reducer from './Reducer';
import screenHome from './ScreenHome';
import screenMovie from './screenMovie';
import screenWatchMovie from './screenWatchMovie';
import auth from './authorization';

const rootReducer = combineReducers({
    reducer,
    screenHome,
    screenMovie,
    screenWatchMovie,
    auth
})

export default rootReducer