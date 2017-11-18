import {combineReducers} from "redux";
import app from './app'
import dataHomepage from './dataHomepage'
import dataIntropage from './dataIntropage'
import dataDetailpage from './dataDetailPage'
import dataUserpage from './dataUserpage';

const rootReducer = combineReducers({
    app,
    dataHomepage,
    dataIntropage,
    dataDetailpage,
    dataUserpage
})

export default rootReducer
