import './categories-container.styles.scss'; 
import categoryMenu from '../category-menu/category-menu.component';
import CategoryItem from '../category-item/category-item.component';


const CategoriesContainer = () => {

  return (
    <div className="categories-container">
      {categoryMenu.map((category) => {
          return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default CategoriesContainer; 