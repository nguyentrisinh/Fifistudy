import * as Types from '../constants/dataHomepage'

const initialState = {
    promotes: null,
    mostView: null,
    mostLastest: null,
}

export default function dataHomepage(state = initialState, action) {
    switch (action.type) {
        case Types.GET_PROMOTE:
            return Object.assign({}, state, {
                promotes: action.serverData
            })
        case Types.GET_MOST_VIEW:
            return Object.assign({}, state, {
                mostView: action.serverData
            })
        case Types.GET_LATEST:
            return Object.assign({}, state, {
                mostLatest: action.serverData
            })
        default:
            return state
    }
}