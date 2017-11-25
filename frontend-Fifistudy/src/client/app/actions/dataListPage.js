import * as Types from '../constants/dataListPage';
import axios from '../config/axios';
import {API_PATH,ORDER_BY} from '../constants/apiPath';
import * as Api from '../actions/api'

export function getListPage(orderBy,pageNumber,pageSize) {
    return function(dispatch){
        Api.getSearch("",ORDER_BY[orderBy],pageNumber,pageSize);
    }
}