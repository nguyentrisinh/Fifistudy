import { createStore } from 'redux';
//like a simple redux
export const types = {
    SET_TEXT: 'SET_TEXT'
}

export const actionCreators = {
    set_text: (text) => {
        return { type: types.SET_TEXT, payload: text }
    }
}

const initialState = {
    text: ''
}

export const reducer = (state = initialState, action) => {
    const {
        text //add more state here
    } = state;
    const { type, payload } = action;

    switch (type) {
        case types.SET_TEXT: {
            return {
                ...state,
                text: payload
            }
        }

        default:
            return {
                ...state
            }
    }
    return state;
}

export const store = createStore(reducer);