import { useState, createContext, useEffect } from 'react';
import { getProducts } from '../utils/firebase/firebase.utils';


export const CategoryContext = createContext({
  categoryMap: {}
})





export const CategoryProvider = ({ children }) => {



  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    
    const fetchProducts = async () => {
      const productsFromDB = await getProducts()
      setCategoryMap(productsFromDB);
    }
    
    fetchProducts(); 
  }, [])


  const value = { categoryMap };

  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  )
}