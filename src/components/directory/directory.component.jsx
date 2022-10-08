import { DirectoryContainer } from './directory.styles'; 
import categoryMenu from '../categoriesPlaceholder/category-menu.component';
import CategoryItem from '../category-item/category-item.component';


const Directory = () => {

  return (
    <DirectoryContainer>
      {categoryMenu.map((category) => {
          return <CategoryItem key={category.id} category={category} />
      })}
    </DirectoryContainer>
  )
}

export default Directory; 