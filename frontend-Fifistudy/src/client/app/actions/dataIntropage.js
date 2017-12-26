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