import { Route, Routes } from 'react-router-dom'; 
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { useEffect } from 'react';
import { getProducts } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { createCategoryAction } from '../../store/category/category.action';


const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryArr = await getProducts(); 
      dispatch(createCategoryAction(categoryArr))
    }
    fetchProducts();
  }, [])


  return(
    <Routes>
      <Route index element={ <CategoriesPreview /> } />
      <Route path=':category' element={ <Category /> } />
    </Routes>

  )
  
}
export default Shop