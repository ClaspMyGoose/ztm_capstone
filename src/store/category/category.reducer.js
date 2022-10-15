import { ACTION_TYPES } from "./category.types";


const INITIAL_STATE = {
  categoryArray: []
}


export const categoryReducer = (state = INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case (ACTION_TYPES.SET_CATEGORY_ARRAY):
      return { 
        ...state,
        categoryArray: payload
      }
    default: 
      return state; 
  }
}