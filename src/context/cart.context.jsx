import { createContext, useState, useEffect } from "react";




// ! helper function - determines if product already in cart and increments qty if so, otherwise adds product object with qty property
const itemAlreadyInCart = (productToAdd, cartItems) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.qty += 1;
      return [...cartItems];
    }
  }
  return [...cartItems, {...productToAdd, qty: 1}]
}
// ! helper function - reduce item cart qty by 1
const reduceQtyByOne = (cartItems, productToReduce ) => {
  const locatedProduct = cartItems.find(item => item.id === productToReduce.id);
  if (locatedProduct.qty === 1) {
    return [...cartItems]; 
  } 
  locatedProduct.qty -= 1; 
  return [...cartItems]; 
}
// ! helper function - increase item cart qty by 1
const increaseQtyByOne = (cartItems, productToIncrease) => {
  const locatedProduct = cartItems.find(item => item.id === productToIncrease.id); 
  locatedProduct.qty += 1; 
  return [...cartItems];
}
// ! helper function - remove item from cart
const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter(item => item.id !== productToRemove.id);
}


// CartContext component
export const CartContext = createContext({
  cartVisible: false,
  setCartVisible: () => {},
  cartQty: 0,
  cartTotal: 0,
  cartItems: [],
  addItemToCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  removeFromCart: () => {}
})



export const CartProvider = ({ children }) => {

  const [cartQty, setCartQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0); 
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    setCartQty(() => cartItems.reduce((prevVal, currVal) => {
      return prevVal += currVal.qty
    }, 0));
    setCartTotal(() => cartItems.reduce((prevVal, currentVal) => {
      return prevVal + (currentVal.qty * currentVal.price);
    }, 0))
  }, [cartItems, setCartQty, setCartTotal]); 

  // ! used in CartDropdown component 
  const addItemToCart = (productToAdd) => {
    setCartItems(itemAlreadyInCart(productToAdd, cartItems)); 
  }

  // ! used in CheckoutLineItem component 
  const decreaseQty = (product) => {
    setCartItems(reduceQtyByOne(cartItems, product));
  }

  const increaseQty = (product) => {
    setCartItems(increaseQtyByOne(cartItems, product));
  }

  const removeFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  }


  const value = {
    cartQty,
    cartTotal,
    cartVisible, 
    setCartVisible,
    cartItems,
    addItemToCart,
    decreaseQty,
    increaseQty,
    removeFromCart
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

