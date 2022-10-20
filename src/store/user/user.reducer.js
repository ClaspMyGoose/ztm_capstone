import { ACTION_TYPES } from "./user.types";



const INITIAL_STATE = {
  currentUser: null,
  isLoading: false, 
  error: null
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {

  const { type, payload } = action; 

  switch(type) {
    case (ACTION_TYPES.SIGN_IN_SUCCESS):
      return {
        ...state,
        currentUser: payload,
        isLoading: false 
      }
    case (ACTION_TYPES.SIGN_IN_FAILED):
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case (ACTION_TYPES.LOG_OUT_SUCCESS):
      return {
        ...state,
        currentUser: payload,
      }
    case (ACTION_TYPES.LOG_OUT_FAILED):
      return {
        ...state,
        error: payload
      }
    default: 
      return state;
  }
}


// CHECK_USER_SESSION: 'CHECK_USER_SESSION',
//   GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
//   EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
//   SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
//   SIGN_IN_FAILED: 'SIGN_IN_FAILED'