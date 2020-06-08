import {RECEIVE_CUSTOMER_DATA_API} from '../actions';

export default (state="",{type,data=""})=>{
    switch(type){
        case RECEIVE_CUSTOMER_DATA_API:
            return data;
        default:
            return state;
    }
}