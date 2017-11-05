import * as Types from '../constants/dataHomepage'

const initialState = {
    promotes: null,
    mostView: null,
    mostSave: null,
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
        case Types.GET_MOST_SAVE:
            return Object.assign({}, state, {
                mostSave: action.serverData
            })
        default:
            return state
    }
}