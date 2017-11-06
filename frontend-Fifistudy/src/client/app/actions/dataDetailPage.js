import * as Types from '../constants/dataDetailPage';
import axios from '../config/axios';
import {Api} from '../constants/api'

export function getEpisode(filmSlug, episodeId) {
    return function (dispatch) {
        axios.get(Api.getEpisode(filmSlug, episodeId))
            .then(response => {
                dispatch({
                    type: Types.GET_EPISODE,
                    serverData: response.data
                })

            })
            .catch(err => console.log(err));

    }
}

export function getFilmDetail(slug) {
    return function (dispatch) {
        axios.get(Api.getFilm(slug))
            .then(response => {
                dispatch({
                    type: Types.GET_FILM_DETAIL,
                    serverData: response.data
                })

            })
            .catch(err => console.log(err));

    }
}
