import { ACTION_TYPES } from "./category.types";


const INITIAL_STATE = {
  categoryMap: null
}


export const categoryReducer = (state = INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case (ACTION_TYPES.SET_CATEGORY_MAP):
      return { 
        ...state,
        categoryMap: payload
      }
    default: 
      return state; 
  }
}