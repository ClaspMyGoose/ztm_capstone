import { createContext, useState, useEffect } from "react";

const itemAlreadyInCart = (productToAdd, cartItems) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.qty += 1;
      return [...cartItems];
    }
  }
  return [...cartItems, {...productToAdd, qty: 1}]
}

export const CartContext = createContext({
  cartVisible: false,
  setCartVisible: () => {},
  cartQty: 0,
  cartItems: [],
  addItemToCart: () => {}
})



export const CartProvider = ({ children }) => {

  const [cartQty, setCartQty] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 


  useEffect(() => {
    setCartQty(() => cartItems.reduce((prevVal, currVal) => {
      return prevVal += currVal.qty
    }, 0));
  }, [cartItems, setCartQty]); 

  const addItemToCart = (productToAdd) => {
    setCartItems(itemAlreadyInCart(productToAdd, cartItems)); 
  }

  const value = {
    cartQty,
    cartVisible, 
    setCartVisible,
    cartItems,
    addItemToCart
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

