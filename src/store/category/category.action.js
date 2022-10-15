import { ACTION_TYPES } from "./category.types"



export const createCategoryAction = (payload) => {
  return { 
    type: ACTION_TYPES.SET_CATEGORY_ARRAY,
    payload: payload
  }
}