import {combineReducers} from "redux";
import app from './app'
import dataHomepage from './dataHomepage'
import dataIntropage from './dataIntropage'
import dataDetailpage from './dataDetailPage'

const rootReducer = combineReducers({
    app,
    dataHomepage,
    dataIntropage,
    dataDetailpage,
})

export default rootReducer
