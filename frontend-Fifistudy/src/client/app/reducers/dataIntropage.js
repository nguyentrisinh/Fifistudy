import * as Types from '../constants/dataIntropage'

const initialState = {
    film: {
        isLoading: true,
        data: null
    },
    actor: {
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
        default:
            return state
    }
}