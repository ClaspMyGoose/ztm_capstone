import { takeLatest, call, put, all } from "redux-saga/effects";

import { ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed, logOutSuccess, logOutFailed } from "./user.action";

import { getCurrentUser, createUserDocument, googleSignIn, logWithEmailPassword, registerWithEmailPassword, logOut } from "../../utils/firebase/firebase.utils";



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


export function* signInWithGooglePopup() {
  try {
    const { user } = yield call(googleSignIn)

    yield call(getSnapshotFromUserAuth, user)

  } catch (error) {
    yield put(signInFailed(error))

  }


}


export function* signInWithEmail({ payload }) {
  try {

    const { email, password } = payload; 

    const { user } = yield call(logWithEmailPassword, email, password);

    yield call(getSnapshotFromUserAuth, user);


  } catch(error) {
    yield put(signInFailed(error))
  }

}

export function* registerWithEmail({payload: {email, password, displayName}}) {
  try {
    const { user } = yield call(registerWithEmailPassword, email, password);

    yield call(getSnapshotFromUserAuth, user,  { name: displayName });

  } catch(error) {
    yield put(signInFailed(error));
  }
}

export function* logOutUser() {
  
  try {
    yield call(logOut); 
    yield put(logOutSuccess());
  } catch(error) {
    yield put(logOutFailed(error));
  }
}
 
// need listener(s) that listens for one of our actions and then calls one of our workers  

export function* onCheckUserSession() {
  yield takeLatest(ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGooglePopup)
}

export function* onEmailSignInStart() {
  yield takeLatest(ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onRegister() {
  yield takeLatest(ACTION_TYPES.REGISTER_WITH_EMAIL_START, registerWithEmail)
}

export function* onSignOut() {
  yield takeLatest(ACTION_TYPES.LOG_OUT_START, logOutUser)
}

// need a generator aggregator 
export function* userSaga () {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onRegister), call(onSignOut)])
}