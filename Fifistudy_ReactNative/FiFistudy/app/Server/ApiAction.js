import {API_PATH} from './ApiPath';
import {baseUrl} from './config'

export const getPromotes = () => {
    return fetch(baseUrl + API_PATH.getPromote)
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
            return null;
        })
}