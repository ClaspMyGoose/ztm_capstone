import { useContext } from "react";
// import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../context/category.context";
import ProductCategory from "../../components/product-category/product-category.component";
import './shop.styles.scss';



const Shop = () => {

  const { categoryMap } = useContext(CategoryContext);

  const categoryItemsPreviewArray = []
  for (let [categoryTitleKey, categoryItems] of Object.entries(categoryMap)) { 
    
    const copyOfItems = categoryItems.slice();
    const previewArr = copyOfItems.splice(0, 4);
    
    const previewObject = {
      title: categoryTitleKey,
      items: previewArr
    }

    categoryItemsPreviewArray.push(previewObject);
  }






  return (
    <div className='product-category-container'>
      
      {categoryItemsPreviewArray.map((productCategory) => {

        const { title, items } = productCategory

        return (
          <ProductCategory key={title} categoryTitle={title} categoryItems={items} />
        )}
      )}
    </div>
  )
}
export default Shop