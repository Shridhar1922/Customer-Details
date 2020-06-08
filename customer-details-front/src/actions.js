export const REQUEST_CUSTOMER_DATA_API = "REQUEST_CUSTOMER_DATA_API";
export const RECEIVE_CUSTOMER_DATA_API = "RECEIVE_CUSTOMER_DATA_API";

export const requestCustomerDataApi =()=>({
    type:REQUEST_CUSTOMER_DATA_API
})

export const receiveCustomerDataApi =data=>({
    type:RECEIVE_CUSTOMER_DATA_API,data
})