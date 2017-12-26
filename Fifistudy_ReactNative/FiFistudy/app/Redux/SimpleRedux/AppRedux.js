import { createStore} from 'redux';

const types = {
    ADD_TOKEN: 'ADD_TOKEN',
    ADD_CURRENT_USER: 'ADD_CURRENT_USER'
}

const initalState = {
    token: 'blank_token',
    current_user: 'anonymous'
}

//Transform values to an object action - include {type, payload}
export const actionCreators = {
    add_token: (token) => {
        return {
            type: ADD_TOKEN,
            payload: token
        }
    },
    add_current_user: (current_user) => {
        return {
            type: ADD_CURRENT_USER,
            payload: current_user
        }
    }
}

export const reducers = (state = initalState, action) => {
    const {
        //Make sure add state of redux here first to use
        token,
        current_user
    } = state;
    const {type, payload} = action;

    switch(type) {
        case types.ADD_TOKEN: {
            return {
                ...state,   
                token: payload
            }
        }

        case types.ADD_CURRENT_USER: {
            return {
                ...state,
                current_user: payload
            }
        }

        return state;
    }
}

export const simpleStore = createStore(reducers);