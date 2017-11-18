import * as Types from '../constants/dataIntropage'

const initialState = {
    film: {
        isLoading: true,
        data: null
    },
    actor: {
        isLoading: true,
        data: null

    },
    comment: {
        isLoading: true,
        data: null
    },
    filmEqualDifficult: {
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
        case Types.GET_ACTOR_INTRO:
            return Object.assign({}, state, {
                actor: Object.assign({}, state.actor, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
            break;
        case Types.GET_COMMENT:
            return Object.assign({}, state, {
                comment: Object.assign({}, state.comment, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
        case Types.GET_FILM_BY_DIFFICULT:
            return Object.assign({}, state, {
                filmEqualDifficult: Object.assign({}, state.filmEqualDifficult, {
                    data: action.serverData,
                    isLoading: action.isLoading

                })
            });
        default:
            return state
    }
}