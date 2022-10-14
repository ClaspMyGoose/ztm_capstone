import { ACTION_TYPES } from "./category.types"

const convertCategoryArrToMap = (array) => {

  const categoryMap = array.reduce((accObj, currentObj) => {
    const { items, title } = currentObj; 
    accObj[title.toLowerCase()] = items;
    return accObj; 
  }, {})
  return categoryMap
}



export const createCategoryAction = (payload) => {
  return { 
    type: ACTION_TYPES.SET_CATEGORY_MAP,
    payload: convertCategoryArrToMap(payload)
  }
}