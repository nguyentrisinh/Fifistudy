import * as Types from '../constants/dataUserpage';
import axios from '../config/axios';
import {Api} from '../constants/api';

export function getVocabulary(token) {
    return function (dispatch) {
        dispatch({
            type: Types.GET_VOCABULARY,
            serverData: null,
            isLoading: true
        })
        let config = {
            headers: {
                "Authorization": `Token ${token}`
            }
        }
        axios.get(Api.getVocabulary, config)
            .then(response => {
                dispatch({
                    type: Types.GET_VOCABULARY,
                    serverData: response.data,
                    isLoading: false
                })

            })
            .catch(err => console.log(err));


    }
}