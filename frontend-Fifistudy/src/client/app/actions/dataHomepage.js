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

export function updateHomepageSavedFilm(film_id) {
    return function (dispatch) {
        dispatch({
            type: Types.UPDATE_HOMEPAGE_SAVED_FILM,
            film_id
        })

    }
}

export function getMostView(token = null) {
    return function (dispatch) {
        if (token) {
            let config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
            axios.get(Api.getMostViewWithAuth, config)
                .then(response => {
                    dispatch({
                        type: Types.GET_MOST_VIEW,
                        serverData: response.data
                    })

                })
                .catch(err => console.log(err));
        }
        else {
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
}
export function getLastest(token = null) {
    return function (dispatch) {
        if (token) {
            let config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            axios.get(Api.getLastestWithAuth, config)
                .then(response => {
                    dispatch({
                        type: Types.GET_LATEST,
                        serverData: response.data
                    })

                })
                .catch(err => console.log(err));
        }
        else {
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
}
