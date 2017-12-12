import {API_PATH} from './ApiPath';
import {baseUrl} from './config'

export const getPromotes = () => {
    return fetch(baseUrl + API_PATH.getPromote)
    // console.log("http://192.168.1.110:8000/api/promotes/get_all/")
    // return fetch("http://192.168.1.110:8000/api/promotes/get_all/")
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return null;
        })
}