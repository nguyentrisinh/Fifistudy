import * as Types from '../const/screenWatchMovie'
import update from 'react-addons-update';
const initialState = {
    episode: {
        isLoading: true,
        data: null
    }
}

export default screenWatchMovie = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_EPISODE:
            return update(state, {
                episode: {
                    $merge: {
                        isLoading: false,
                        data: action.data
                    }
                }
            });
            break;

        case Types.CHANGE_SUB_ITEM_PROP:
            console.log("reducer: ", action.subItemNumber)
            return update(state, {
                subItem:  action.subItemNumber
            });
            break;
                        
        default :
            return state;
    }
}