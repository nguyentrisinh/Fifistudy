import * as Types from '../constants/app';
import axios from '../config/axios';
import * as Api from '../actions/api'


export const getUserInfo = (token) => {
    return function (dispatch) {
        Api.getUserInfo(token).then(res => {
            if (res.data.errors === null) {
                dispatch({
                    type: Types.GET_USER_INFO,
                    serverData: res
                })
                dispatch(doLogin(true));
            }
            else {
            }
        })
    }

}

export const toggleModalLogin = () => {
    return function (dispatch) {
        dispatch({
            type: Types.TOGGLE_MODAL_LOGIN
        })
    }

}

export const doLogin = (isLogin) => {
    return function (dispatch) {
        dispatch({
            type: Types.DO_LOGIN,
            isLogin
        })
    }

}