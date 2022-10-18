export const ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',

  //adding additional types for our async auth promise that is now being called in App.js on mount (useEffect)
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  // different actions for starting our different sign-in methods
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  // generic success and failed actions 
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED'
}