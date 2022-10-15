
const convertCategoryArrToMap = (array) => {
  
  const categoryMap = array.reduce((accObj, currentObj) => {
    const { items, title } = currentObj; 
    accObj[title.toLowerCase()] = items;
    return accObj; 
  }, {})
  return categoryMap
}


export const selectCategory = (state) => convertCategoryArrToMap(state.category.categoryArray);