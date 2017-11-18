import {Api} from '../constants/api'
import axios from '../config/axios'
const tokenFormat = (token) => `Token ${token}`

export const postSignUpOne = (data) => {
    // data={
    //     "username": "string",
    //     "confirm_password": "string",
    //     "password": "string",
    //     "email": "string"
    // }
    return axios.post(Api.postSignUpOne, data)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postSignUpTwo = (data, config) => {
    // data={
    // "pin": "string"
// }
//
//     headers:{
//         Authorization:"Token xxxxx...."
//     }

    return axios.post(Api.postSignUpTwo, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
export const postUpdateUserInfo = (data, config) => {
    // {
    //     "first_name": "string",
    //     "last_name": "string",
    //     "gender": "string",
    //     "phone": "string",
    //     "birthday": "string",
    //     "address": "string"
    // }

//     headers:{
//         Authorization:"Token xxxxx...."
//     }

    return axios.post(Api.postUpdateUserInfo, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postUpdateAvatar = (data, config) => {
    // {
    //     "avatar": "string"
    // }

//     headers:{
//         Authorization:"Token xxxxx...."
//     }

    return axios.post(Api.postUpdateAvatar, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserInfo = (token) => {

    let config = {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    return axios.get(Api.getUserInfo, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postLogin = (data) => {
    // {
    //     "username": "string",
    //     "password": "string"
    // }

//     headers:{
//         Authorization:"Token xxxxx...."
//     }

    return axios.post(Api.postLogin, data)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getLogout = (token) => {

    let config = {
        headers: {
            Authorization: tokenFormat(token)
        }
    }

    return axios.get(Api.getLogout, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postUserSaveFilm = (data, config) => {

    return axios.post(Api.postUserSaveFilm, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}


export const postComment = (data, token) => {
    // {
    //     "content": "string",
    //     "film_id": "string"
    // }
    let config = {
        headers: {
            "Authorization": tokenFormat(token)
        }
    }
    return axios.post(Api.postComment, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postLikeComment = (data, token) => {
    // {
    //     "comment_id": "string"
    // }
    let config = {
        headers: {
            "Authorization": tokenFormat(token)
        }
    }

    return axios.post(Api.postLikeComment, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getFilmByDifficult = (difficultLevel) => {

    return axios.post(Api.getFilmByDifficult(difficultLevel))
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const postSaveVocabulary = (data, token) => {
    // {
    //     "current_time": "string",
    //     "meaning": "string",
    //     "vocabulary": "string",
    //     "episode_id": "string"
    // }
    let config = {
        headers: {
            "Authorization": tokenFormat(token)
        }
    }
    return axios.post(Api.postSaveVocabulary, data, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getVocabulary = (token) => {
    let config = {
        headers: {
            "Authorization": tokenFormat(token)
        }
    }
    return axios.get(Api.getVocabulary, config)
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

