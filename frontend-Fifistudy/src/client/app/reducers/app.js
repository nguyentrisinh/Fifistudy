import * as Types from '../constants/app'
import update from 'react-addons-update'
// update(state, {$merge: {userInfo: res}})
const initialState = {
    userInfo: null
}

export default function index(state = initialState, action) {

    switch (action.type) {
        case Types.GET_USER_INFO:

            return Object.assign({}, state, {userInfo: action.serverData})
        // Object.assign({},state,{userInfo:action.serverData})
        default:
            return state
    }
}