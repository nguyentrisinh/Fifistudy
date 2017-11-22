import * as Types from '../constants/dataUserpage'

const initialState = {
    vocabulary: {
        isLoading: true,
        data: null
    },
    savedFilm: {
        isLoading: true,
        data: null
    }
}

export default function dataHomepage(state = initialState, action) {
    switch (action.type) {
        case Types.GET_VOCABULARY:
            return Object.assign({}, state, {
                vocabulary: Object.assign({}, state.vocabulary, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
            break;
        case Types.GET_SAVE_FILM:
            return Object.assign({}, state, {
                savedFilm: Object.assign({}, state.savedFilm, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
            break;
        default:
            return state
    }
}