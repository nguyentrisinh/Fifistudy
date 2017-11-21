import * as Types from '../constants/dataHomepage';
import axios from '../config/axios';
import {Api} from '../constants/api'

export function getPromotes() {
    return function (dispatch) {
        axios.get(Api.getPromote)
            .then(response => {
                dispatch({
                    type: Types.GET_PROMOTE,
                    serverData: response.data
                })

            })
            .catch(err => console.log(err));

    }
}

export function getMostView() {
    return function (dispatch) {
        axios.get(Api.getMostView)
            .then(response => {
                dispatch({
                    type: Types.GET_MOST_VIEW,
                    serverData: response.data
                })

            })
            .catch(err => console.log(err));

    }
}
export function getLastest() {
    return function (dispatch) {
        axios.get(Api.getLastest)
            .then(response => {
                dispatch({
                    type: Types.GET_LATEST,
                    serverData: response.data
                })

            })
            .catch(err => console.log(err));

    }
}
