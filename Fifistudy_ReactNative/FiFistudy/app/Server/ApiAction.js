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

export const getLastest = () => {
    return fetch(baseUrl + API_PATH.getLastest)
    // console.log("http://192.168.1.110:8000/api/promotes/get_all/")
    // return fetch("http://192.168.1.110:8000/api/promotes/get_all/")
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return null;
        })
};

export const getMostView = () => {
    return fetch(baseUrl + API_PATH.getMostView)
    // console.log("http://192.168.1.110:8000/api/promotes/get_all/")
    // return fetch("http://192.168.1.110:8000/api/promotes/get_all/")
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return null;
        })
};

export const getFilm = (filmSlug) => {
    return fetch(baseUrl + API_PATH.getFilm(filmSlug))
    // console.log("http://192.168.1.110:8000/api/promotes/get_all/")
    // return fetch("http://192.168.1.110:8000/api/promotes/get_all/")
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return null;
        })
};

export const getEpisode = (filmSlug,episodeId) => {
    return fetch(baseUrl + API_PATH.getEpisode(filmSlug,episodeId))
    // console.log("http://192.168.1.110:8000/api/promotes/get_all/")
    // return fetch("http://192.168.1.110:8000/api/promotes/get_all/")
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return null;
        })
};