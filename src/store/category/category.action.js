import { ACTION_TYPES } from "./category.types"
import { getProducts } from "../../utils/firebase/firebase.utils"




const fetchCategoryStart = () => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_START
  }
}

const fetchCategoryFailed = (error) => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_FAILED,
    payload: error
  }
}

const fetchCategorySuccess = (categoriesData) => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
    payload: categoriesData
  }
}

export const fetchCategoriesAsync = () => async (dispatch) => {

  dispatch(fetchCategoryStart())

  try {
    const products = await getProducts();
    dispatch(fetchCategorySuccess(products));
  } catch (error) {
    dispatch(fetchCategoryFailed(error))
  }
}

