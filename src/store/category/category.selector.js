import { createSelector } from "reselect";

const convertCategoryArrToMap = (array) => {
  
  const categoryMap = array.reduce((accObj, currentObj) => {
    const { items, title } = currentObj; 
    accObj[title.toLowerCase()] = items;
    return accObj; 
  }, {})
  return categoryMap
}

// select our category slice from state
const selectCategorySlice = (state) => state.category; 
// memoize the categoryArr from our category slice, we only run the reduce conversion logic if this array changes
// even though this selector will fire whenever any state changes 

export const selectIsLoading = createSelector([selectCategorySlice], (categorySlice) => categorySlice.isLoading);

const selectCategoryArr = createSelector([selectCategorySlice], (categorySlice) => categorySlice.categoryArray)


export const selectCategory = createSelector([selectCategoryArr], (categoryArr) => convertCategoryArrToMap(categoryArr));