
import { takeLatest, all, call, put } from "redux-saga/effects";

import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action";
import { getProducts } from "../../utils/firebase/firebase.utils";

import { ACTION_TYPES } from "./category.types";


export function* fetchCategoriesAsync() {
  try {

    // instead of awaiting call to getProducts, inside the generator we yield the call() to getProducts
    const products = yield call(getProducts);

    // instead of dispatching our action on success / failure we yield the put() 
    yield put(fetchCategorySuccess(products));
  } catch (error) {
    yield put(fetchCategoryFailed(error))
  }

}


export function* onFetchCategories() {

  // anytime we hear a FETCH_CATEGORY_START action (initial shop.component.jsx mount), we run the fetchCategoriesAsync generator function 
  // takeLatest, i.e. if we're in the middle of processing and hear another FETCH_CATEGORY_START, we restart 
  yield takeLatest(ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync)


}


// essentially a saga aggregator, this is what goes inside the rootSaga 

export function* categoriesSaga() {

  yield all([call(onFetchCategories)])

}


