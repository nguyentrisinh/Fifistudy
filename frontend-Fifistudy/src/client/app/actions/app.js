import * as Types from '../constants/app';
import axios from '../config/axios';
import * as Api from '../actions/api'


export const getUserInfo = (token) => {
    return function (dispatch) {
        Api.getUserInfo(token).then(res =>

            dispatch({
                type: Types.GET_USER_INFO,
                serverData: res
            }))
    }

}