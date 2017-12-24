import {API_PATH} from './ApiPath';
import {baseUrl} from './config';

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

export const postLogin = (username, password) => {
    username = 'phuong';
    password = 'abc123456';
    return fetch(baseUrl + API_PATH.postLogin, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then((response) => {
        if (!response.ok)
            return Promise.reject(response.statusText);
        return response.json();
    })
    .then((responeData) => {
        console.log(responeData)
        //this.onValueChange(STORAGE_KEY, responeData.id_token)
    })
}