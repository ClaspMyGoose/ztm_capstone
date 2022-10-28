import { ACTION_TYPES, ICategory, withMatcher } from "./category.types"


interface ActionWithPayload<T, P> {
  type: T
  payload: P
}

interface ActionWithoutPayload<T> {
  type: T
}


export type FetchCategoryStart = ActionWithoutPayload<ACTION_TYPES.FETCH_CATEGORY_START>;

export type FetchCategorySuccess = ActionWithPayload<ACTION_TYPES.FETCH_CATEGORY_SUCCESS, ICategory[]>;

export type FetchCategoryFailed = ActionWithPayload<ACTION_TYPES.FETCH_CATEGORY_FAILED, Error>;

export type CategoryAction = FetchCategoryFailed | FetchCategorySuccess | FetchCategoryStart;



export const fetchCategoryStart = withMatcher((): FetchCategoryStart => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_START
  }
})

export const fetchCategoryFailed = withMatcher((error: Error): FetchCategoryFailed => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_FAILED,
    payload: error
  }
})

export const fetchCategorySuccess = withMatcher((categoriesData: ICategory[]): FetchCategorySuccess => {
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
    payload: categoriesData
  }
})

