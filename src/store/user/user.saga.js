import { takeLatest, call, put, all } from "redux-saga/effects";

import { ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

import { getCurrentUser, createUserDocument } from "../../utils/firebase/firebase.utils";

// need function(s) that do the async work

// ! this function should be called from other generators (like isUserAuthenticated below) to handle google_sign_in, email_sign_in, register 
export function* getSnapshotFromUserAuth(userAuth, additionalInfo = {}) {
  try {
    const userSnapshot = yield call(createUserDocument, userAuth, additionalInfo)
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch(error) {
    yield put(signInFailed(error))
  }

}


export function* isUserAuthenticated() {
  // result of function getCurrentUser can be userAuth object (if Authed), null (if not Authed), or error 
  try {
    const userAuth = yield call(getCurrentUser) 

    // if userAuth is null we do nothing
    if (!userAuth) return 

    // if userAuth is an object we need to call createUserDocument aka getSnapshotFromUserAuth
    yield call(getSnapshotFromUserAuth, userAuth)


  } catch(error) {
    yield put(signInFailed(error))
  }
}
 
// need listener(s) that listens for one of our actions and then calls one of our workers  

export function* onCheckUserSession() {
  yield takeLatest(ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}



// need a generator aggregator 
export function* userSaga () {
  yield all([call(onCheckUserSession)])
}