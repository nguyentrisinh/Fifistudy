import {Api} from '../constants/api'
import axios from '../config/axios'

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