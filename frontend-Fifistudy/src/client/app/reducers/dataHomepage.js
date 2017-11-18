import * as Types from '../constants/dataHomepage'
import update from 'react-addons-update'

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
                mostLastest: action.serverData
            });
        // case Types.UPDATE_HOMEPAGE_SAVED_FILM:
        //     console.log(!!action.film_id)
        //     let filmNeedUpdate = state.mostLastest.data.findIndex(o => o.id == action.film_id);
        //     let newLastest = update(state.mostLastest.data, {
        //         $splice: [[filmNeedUpdate, 1, update(state.mostLastest.data[filmNeedUpdate], {$merge: {is_saved: !!action.film_id}})]]
        //     })
        //     return Object.assign({}, state, Object.assign({},state.mostLastest,{data:newLastest}))
        default:
            return state
    }
}