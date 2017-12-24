import * as Types from '../const/authorization';
import * as ApiAction from '../../Server/ApiAction';

export const login = (username, password) => {
    // return {
    //     type: Types.LOGIN,
    //     username: username,
    //     password: password,
    // };
    return (dispatch) => {
        ApiAction.postLogin(username, password);
        // ApiAction.postLogin(username, password).then(response => {
        //     dispatch({
        //         type: Types.LOGIN,
        //     })
        // })
    }
}

export const logout = () => {
    return {
        type: Types.LOGOUT
    };
}

export const signup = (username, password) => {
    return (dispatch) => {
    };
}