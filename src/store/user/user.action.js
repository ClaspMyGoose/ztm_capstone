import { ACTION_TYPES } from "./user.types"

export const setCurrentUser = (user) => {
  return {type: ACTION_TYPES.SET_CURRENT_USER, payload: user }
}

// new functions / action creators for our redux-saga handling of sign in 

export const checkUserSession = () => {
  return {type: ACTION_TYPES.CHECK_USER_SESSION}

}

export const googleSignInStart = () => {
  return { type: ACTION_TYPES.GOOGLE_SIGN_IN_START}
}

export const emailSignInStart = (email, password) => {
  return { type: ACTION_TYPES.EMAIL_SIGN_IN_START, payload: { email, password }}
}

export const signInSuccess = (userAuth) => {
  return { type: ACTION_TYPES.SIGN_IN_SUCCESS, payload: userAuth}
}

export const signInFailed = (error) => {
  return { type: ACTION_TYPES.SIGN_IN_FAILED, payload: error}
}

export const registerStart = (email, password, displayName) => {
  return { type: ACTION_TYPES.REGISTER_WITH_EMAIL_START, payload: { email, password, displayName }}
}

export const logOutUserStart = () => {
  return { type: ACTION_TYPES.LOG_OUT_START }
}

export const logOutFailed = (error) => {
  return { type: ACTION_TYPES.LOG_OUT_FAILED, payload: error }
}

export const logOutSuccess = () => {
  return { type: ACTION_TYPES.LOG_OUT_SUCCESS, payload: null }
}



