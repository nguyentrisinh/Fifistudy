import {combineReducers} from "redux";
import index from './index'
import dataHomepage from './dataHomepage'
import dataIntropage from './dataIntropage'

const rootReducer = combineReducers({
    index,
    dataHomepage,
    dataIntropage
})

export default rootReducer
