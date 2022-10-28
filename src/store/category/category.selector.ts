import { createSelector } from "reselect";
import { ICategory, ICategoryMap } from "./category.types";
import { ICategoriesState } from './category.reducer'

const convertCategoryArrToMap = (array: ICategory[]) => {
  
  const categoryMap = array.reduce((accObj, currentObj): ICategoryMap => {
    const { items, title } = currentObj; 
    accObj[title.toLowerCase()] = items;
    return accObj; 
  }, {} as ICategoryMap)
  return categoryMap
}

// select our category slice from state
const selectCategorySlice = (state): ICategoriesState => state.category; 
// memoize the categoryArr from our category slice, we only run the reduce conversion logic if this array changes
// even though this selector will fire whenever any state changes 

export const selectIsLoading = createSelector([selectCategorySlice], (categorySlice) => categorySlice.isLoading);

const selectCategoryArr = createSelector([selectCategorySlice], (categorySlice) => categorySlice.categoryArray)


export const selectCategory = createSelector([selectCategoryArr], (categoryArr) => convertCategoryArrToMap(categoryArr));