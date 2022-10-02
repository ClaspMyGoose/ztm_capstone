import { useState, createContext, useEffect } from 'react';
import { getProducts } from '../utils/firebase/firebase.utils';


export const ProductContext = createContext({
  products: [] 
})





export const ProductProvider = ({ children }) => {



  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])


  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}