import { ACTION_TYPES } from "./category.types";


const INITIAL_STATE = {
  categoryArray: [],
  isLoading: false,
  errorState: null,
}


export const categoryReducer = (state = INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case (ACTION_TYPES.FETCH_CATEGORY_SUCCESS):
      return { 
        ...state,
        categoryArray: payload,
        isLoading: false 
      }
    case (ACTION_TYPES.FETCH_CATEGORY_START):
      return {
        ...state,
        isLoading: true
      }
    case (ACTION_TYPES.FETCH_CATEGORY_FAILED):
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default: 
      return state; 
  }
}