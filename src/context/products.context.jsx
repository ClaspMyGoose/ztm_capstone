import { useState, createContext } from 'react';
import SHOP_JSON from '../shop-data.json'; 

export const ProductContext = createContext({
  products: [] 
})

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState(SHOP_JSON);

  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}