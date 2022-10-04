import { useContext } from "react";
import { CategoryContext } from "../../context/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

  const { categoryMap } = useContext(CategoryContext); 



  return (
    <>
      {Object.keys(categoryMap).map((title) => {
          const items = categoryMap[title];
          return <CategoryPreview key={title} title={title} items={items} />
        })
      }
    </>
  )

}; 


export default CategoriesPreview