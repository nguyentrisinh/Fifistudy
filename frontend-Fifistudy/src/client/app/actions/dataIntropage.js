import * as Types from '../constants/dataIntropage';
import axios from '../config/axios';
import {Api} from '../constants/api'

export function getFilm(slug) {
    return function (dispatch) {
        dispatch({
            type: Types.GET_FILM,
            serverData: null,
            isLoading: true
        })
        axios.get(Api.getFilm(slug))
            .then(response => {
                dispatch({
                    type: Types.GET_FILM,
                    serverData: response.data,
                    isLoading: false
                })

            })
            .catch(err => console.log(err));

    }
}
export function getActorIntro(slug) {
    return function (dispatch) {
        dispatch({
            type: Types.GET_ACTOR_INTRO,
            serverData: null,
            isLoading: true
        })
        axios.get(Api.getActor(slug))
            .then(response => {
                dispatch({
                    type: Types.GET_ACTOR_INTRO,
                    serverData: response.data,
                    isLoading: false
                })

            })
            .catch(err => console.log(err));

    }
}

export function getComment(slug, token = null) {
    return function (dispatch) {
        dispatch({
            type: Types.GET_COMMENT,
            serverData: null,
            isLoading: true
        })
        if (token) {
            let config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
            axios.get(Api.getCommentWithAuth(slug), config)
                .then(response => {
                    dispatch({
                        type: Types.GET_COMMENT,
                        serverData: response.data,
                        isLoading: false
                    })

                })
                .catch(err => console.log(err));
        }
        else {
            axios.get(Api.getComment(slug))
                .then(response => {
                    dispatch({
                        type: Types.GET_COMMENT,
                        serverData: response.data,
                        isLoading: false
                    })

                })
                .catch(err => console.log(err));
        }


    }
}

export function getFilmByDifficult(difficultLevel) {
    return function (dispatch) {
        dispatch({
            type: Types.GET_FILM_BY_DIFFICULT,
            serverData: null,
            isLoading: true
        })

        axios.get(Api.getFilmByDifficult(difficultLevel))
            .then(response => {
                dispatch({
                    type: Types.GET_FILM_BY_DIFFICULT,
                    serverData: response.data,
                    isLoading: false
                })

            })
            .catch(err => console.log(err));


    }
}