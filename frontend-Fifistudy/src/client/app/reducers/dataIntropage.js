import * as Types from '../constants/dataIntropage'

const initialState = {
    film: null
}

export default function dataHomepage(state = initialState, action) {
    switch (action.type) {
        case Types.GET_FILM:
            return Object.assign({}, state, {
                film: action.serverData
            })
        default:
            return state
    }
}