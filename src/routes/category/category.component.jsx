import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, CategoryItems } from './category.styles';

import { useSelector } from 'react-redux';
import { selectCategory, selectIsLoading } from '../../store/category/category.selector';


const Category = () => {

  const isLoading = useSelector(selectIsLoading); 

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
      { isLoading ? <Spinner /> : (
      <CategoryItems>
        {categoryItems && categoryItems.map((item) => {
          return <ProductCard key={item.id} product={item} />
        })}
      </CategoryItems>
      )}
      
    </CategoryContainer>
  )
}


export default Category; 