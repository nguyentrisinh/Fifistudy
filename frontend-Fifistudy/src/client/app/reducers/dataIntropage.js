import * as Types from '../constants/dataIntropage'

const initialState = {
    film: {
        isLoading: true,
        data: null
    }
}

export default function dataHomepage(state = initialState, action) {
    switch (action.type) {
        case Types.GET_FILM:
            return Object.assign({}, state, {
                film: Object.assign({}, state.film, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
            break;
        default:
            return state
    }
}