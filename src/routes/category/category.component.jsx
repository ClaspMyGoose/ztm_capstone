import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../context/category.context';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryItems } from './category.styles';


const Category = () => {

  const { category } = useParams(); 
  const { categoryMap } = useContext(CategoryContext);
  const [categoryItems, setCategoryItems] = useState(categoryMap[category]);
 

  useEffect(() => {
    setCategoryItems(categoryMap[category])
  }, [categoryMap, category])


  return (
    <CategoryContainer>
      <h2>{category.toUpperCase()}</h2>
      <CategoryItems>
        {categoryItems && categoryItems.map((item) => {
          return <ProductCard key={item.id} product={item} />
        })}
      </CategoryItems>
    </CategoryContainer>
  )


}


export default Category; 