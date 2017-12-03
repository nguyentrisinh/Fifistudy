import * as Types from '../const/screenHome';
import * as ApiAction from '../../Server/ApiAction'

export const getPromotes = ()=>{
    return (dispatch)=>{
       ApiAction.getPromotes().then(response=>{
           dispatch({
               type:Types.GET_PROMOTE,
               data:response
           })
       })
    }
}