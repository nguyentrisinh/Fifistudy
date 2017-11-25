import * as Types from '../constants/app';
import axios from '../config/axios';
import * as Api from '../actions/api';
import {MAX_PAGE} from '../constants/apiPath'


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
                dispatch(doLogin(false));

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

export const getSearch = (searchKey, orderBy, pageNumber, pageSize = MAX_PAGE, token = null) => {
    return function (dispatch) {
        Api.getSearch(searchKey, orderBy, pageNumber, pageSize, token).then(res => {
            dispatch({
                type: Types.GET_SEARCH,
                serverData: res
            })

        })
    }

}