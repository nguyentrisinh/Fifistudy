import * as Types from '../const/authorization';
//import update from 'react-addons-update';
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export default reducer = (state = defaultState, action) =>  {
    switch (action.type) {
        case Types.LOGIN:
            let obj = Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
            return obj;

        case Types.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                password: ''
            });
        default:
            return state;
    }
}