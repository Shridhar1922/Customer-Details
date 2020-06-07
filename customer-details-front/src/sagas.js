import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'

import {receiveHelloWorld} from './actions';
// import helloWorld from './reducers/helloWorld';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
   try {
     // const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(receiveHelloWorld('Hello World From Redux Sagas!'));
   } catch (e) {
      yield put(receiveHelloWorld('Hello World From Redux Sagas!'));
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
  yield takeLatest("REQUEST_HELLO_WORLD", helloWorld);
}

export default mySaga;