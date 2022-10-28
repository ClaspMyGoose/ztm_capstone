import { ICategory } from "./category.types";
import { fetchCategoryStart, fetchCategoryFailed, fetchCategorySuccess } from "./category.action";
import { AnyAction } from 'redux';


export interface ICategoriesState {
  readonly categoryArray: ICategory[];
  readonly isLoading: boolean;
  readonly errorState: Error | null; 
}


const INITIAL_STATE: ICategoriesState = {
  categoryArray: [],
  isLoading: false,
  errorState: null,
}


export const categoryReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {

  if (fetchCategoryStart.match(action)) {
    return {
      ...state,
      isLoading: true
    }
  }
  
  if (fetchCategorySuccess.match(action)) {
    return { 
      ...state,
      categoryArray: action.payload,
      isLoading: false 
    }
  }

  if (fetchCategoryFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
  }

  return state; 
}