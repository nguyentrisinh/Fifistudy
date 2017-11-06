import {combineReducers} from "redux";
import index from './index'
import dataHomepage from './dataHomepage'
import dataIntropage from './dataIntropage'
import dataDetailpage from './dataDetailPage'

const rootReducer = combineReducers({
    index,
    dataHomepage,
    dataIntropage,
    dataDetailpage
})

export default rootReducer
