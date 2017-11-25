import * as Types from '../constants/app'
import update from 'react-addons-update'
// update(state, {$merge: {userInfo: res}})
const initialState = {
    userInfo: null,
    isOpenModalLogin: false,
    isLogin: false,
    searchResult: null
}

export default function index(state = initialState, action) {

    switch (action.type) {
        case Types.GET_USER_INFO:

            return Object.assign({}, state, {userInfo: action.serverData})
        // Object.assign({},state,{userInfo:action.serverData})
        case Types.TOGGLE_MODAL_LOGIN:
            return Object.assign({}, state, {isOpenModalLogin: !state.isOpenModalLogin})

        case Types.DO_LOGIN:
            return Object.assign({}, state, {isLogin: action.isLogin})
        case Types.GET_SEARCH:
            return Object.assign({}, state, {searchResult: action.serverData})
        default:
            return state
    }
}