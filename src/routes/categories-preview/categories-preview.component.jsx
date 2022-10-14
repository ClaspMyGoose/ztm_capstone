import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategory } from "../../store/category/category.selector";

const CategoriesPreview = () => {

  const categoryMap = useSelector(selectCategory)

  return (
    <>
      {categoryMap && Object.keys(categoryMap).map((title) => {
          const items = categoryMap[title];
          return <CategoryPreview key={title} title={title} items={items} />
        })
      }
    </>
  )

}; 


export default CategoriesPreview