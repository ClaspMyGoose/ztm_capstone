import './category.styles.scss'; 
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../context/category.context';
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {

  const { category } = useParams(); 
  const { categoryMap } = useContext(CategoryContext);
  const [categoryItems, setCategoryItems] = useState(categoryMap[category]);
 

  useEffect(() => {
    setCategoryItems(categoryMap[category])
  }, [categoryMap, category])


  return (
    <div className='category-container'>
      <h2 className='title'>{category.toUpperCase()}</h2>
      <div className='category-items'>
        {categoryItems && categoryItems.map((item) => {
          return <ProductCard key={item.id} product={item} />
        })}
      </div>
    </div>
  )


}


export default Category; 