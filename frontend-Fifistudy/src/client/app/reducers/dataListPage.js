import * as Types from '../constants/dataListPage'
import * as TypesApp from '../constants/app'
import update from 'react-addons-update'
// update(state, {$merge: {userInfo: res}})
const initialState = {
    dataListPage: {
        hasMore: false,
        nextPage: 1,
        data: [],
        isLoading: false
    }
}

export default function index(state = initialState, action) {

    switch (action.type) {
        case TypesApp.UPDATE_SAVED:
            let filmId = action.filmId;
            let indexFilm = state.dataListPage.data.findIndex(o => o.id == filmId);
            let newFilm = update(state.dataListPage.data[indexFilm], {$merge: {is_saved: !state.dataListPage.data[indexFilm].is_saved}});
            let newData = state.dataListPage.data;
            if (indexFilm > -1) {
                newData = update(state.dataListPage.data, {$splice: [[indexFilm, 1, newFilm]]})
            }
            let newDataListPage = update(state.dataListPage, {$merge: {data: newData}});
            return Object.assign({}, state, {
                dataListPage: newDataListPage
            })

        case Types.RESET_LIST_FILM:
            if (action.serverData.errors === null) {
                return Object.assign({}, state, {
                    dataListPage: {
                        hasMore: action.serverData.data.has_more,
                        nextPage: 2,
                        data: action.serverData.data.films,
                        isLoading: false
                    }
                })
            }
            return state;

        case Types.LOADING_LIST_FILM:
            let newSearchResult = update(state.dataListPage, {$merge: {isLoading: true, hasMore: false}})
            return Object.assign({}, state, {dataListPage: newSearchResult})
        case Types.GET_LIST_FILM:
            if (action.serverData.errors === null) {
                return Object.assign({}, state, {
                    dataListPage: {
                        hasMore: action.serverData.data.has_more,
                        nextPage: state.dataListPage.nextPage + 1,
                        data: [...state.dataListPage.data.concat(action.serverData.data.films)],
                        isLoading: false
                    }
                })
            }
            return state;

        default:
            return state
    }
}