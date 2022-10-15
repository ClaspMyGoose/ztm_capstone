import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryItems } from './category.styles';

import { useSelector } from 'react-redux';
import { selectCategory } from '../../store/category/category.selector';

const Category = () => {

  const { category } = useParams(); 
  const categoryMap = useSelector(selectCategory); 
  const [categoryItems, setCategoryItems] = useState([]);
 

  useEffect(() => {
    if (categoryMap) {
      setCategoryItems(categoryMap[category])
    }
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