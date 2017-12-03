import {combineReducers} from 'redux';

import reducer from './Reducer';
import screenHome from './ScreenHome'

const rootReducer = combineReducers({
    reducer,
    screenHome
})

export default rootReducer