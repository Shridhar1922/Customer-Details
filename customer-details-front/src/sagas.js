import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import {fetchData} from './api';

import {REQUEST_CUSTOMER_DATA_API,receiveCustomerDataApi} from './actions';
// import helloWorld from './reducers/helloWorld';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getCustomerData(action) {
   try {
     const data = yield call(fetchData);
     console.log("sagas data",data)
      yield put(receiveCustomerDataApi(data));
   } catch (e) {
     console.log("error",e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_CUSTOMER_DATA_API, getCustomerData);
}

export default mySaga;