import { ACTION_TYPES } from "./category.types"




export const fetchCategoryStart = () => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_START
  }
}

export const fetchCategoryFailed = (error) => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_FAILED,
    payload: error
  }
}

export const fetchCategorySuccess = (categoriesData) => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
    payload: categoriesData
  }
}


