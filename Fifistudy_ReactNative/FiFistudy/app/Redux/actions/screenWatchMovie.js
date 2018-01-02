import * as Types from '../const/screenWatchMovie';
import * as ApiAction from '../../Server/ApiAction'

export const getEpisode = (filmSlug,episodeId)=>{
    return (dispatch)=>{
        ApiAction.getEpisode(filmSlug,episodeId).then(response=>{
            dispatch({
                type:Types.GET_EPISODE,
                data:response
            })
        })
    }
}

export const changeSubItemProp = (subItemNumber)=>{
    return (dispatch)=>{
        dispatch({
            type:Types.CHANGE_SUB_ITEM_PROP,
            subItemNumber: subItemNumber
        });
    }
}