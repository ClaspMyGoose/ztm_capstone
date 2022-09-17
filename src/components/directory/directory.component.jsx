import './directory.styles.scss'; 
import categoryMenu from '../category-menu/category-menu.component';
import CategoryItem from '../category-item/category-item.component';


const Directory = () => {

  return (
    <div className="directory-container">
      {categoryMenu.map((category) => {
          return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default Directory; 