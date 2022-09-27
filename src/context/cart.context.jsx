import { createContext, useState } from "react";



export const CartContext = createContext({
  cartQty: 0, 
  cartVisible: false,
  setCartVisible: () => {},
  cartItems: [],
  itemQty: null
})



export const CartProvider = ({ children }) => {

  const [cartQty, setCartQty] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 
  const [itemQty, setItemQty] = useState(null); 


  const value = {
    cartQty,
    setCartQty,
    cartVisible, 
    setCartVisible,
    cartItems,
    setCartItems,
    itemQty,
    setItemQty
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

