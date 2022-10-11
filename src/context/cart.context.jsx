import { createContext, useReducer } from "react";




// ! helper function - determines if product already in cart and increments qty if so, otherwise adds product object with qty property
const itemAlreadyInCart = (productToAdd, cartItems) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.qty += 1;
      return {
        cartItems: [...cartItems],
        cartTotal: item.price,
        cartQty: 1
      };
    }
  }
  return {
    cartItems: [...cartItems, {...productToAdd, qty: 1}],
    cartQty: 1,
    cartTotal: productToAdd.price
  }
}
// ! helper function - reduce item cart qty by 1
const reduceQtyByOne = (cartItems, productToReduce ) => {
  const locatedProduct = cartItems.find(item => item.id === productToReduce.id);
  if (locatedProduct.qty === 1) {
    return {
      cartItems: [...cartItems],
      cartQty: 0,
      cartTotal: 0
    }; 
  } 
  locatedProduct.qty -= 1; 
  return {
    cartItems: [...cartItems], 
    cartQty: -1, 
    cartTotal: -locatedProduct.price
  }; 
}
// ! helper function - increase item cart qty by 1
const increaseQtyByOne = (cartItems, productToIncrease) => {
  const locatedProduct = cartItems.find(item => item.id === productToIncrease.id); 
  locatedProduct.qty += 1; 
  return {
    cartItems: [...cartItems],
    cartQty: 1,
    cartTotal: locatedProduct.price
  };
}
// ! helper function - remove item from cart
const removeItem = (cartItems, productToRemove) => {
  

  const { price, qty } = productToRemove;

  return {
    cartItems: cartItems.filter(item => item.id !== productToRemove.id),
    cartQty: -qty,
    cartTotal: -(qty * price)
  };
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

const ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART'
}


const INITIAL_STATE = { 
  cartVisible: false,
  cartQty: 0,
  cartTotal: 0,
  cartItems: [],
}

const cartReducer = (state, action ) => {

  const { type, payload } = action;
  const { cartVisible, cartQty, cartTotal } = state;

  switch(type) {
    case 'SET_CART_ITEMS': 
      return {
        ...state,
        cartItems: payload.cartItems,
        cartQty: cartQty + payload.cartQty,
        cartTotal: cartTotal + payload.cartTotal
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        cartVisible: !cartVisible
      }
    default: 
      throw new Error(`unhandled type ${type} in cartReducer`)
  }
}



export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const { cartQty, cartTotal, cartVisible, cartItems } = state;


  // ! used in CartDropdown component 
  const addItemToCart = (productToAdd) => {
    dispatch({type: ACTION_TYPES.SET_CART_ITEMS, payload: itemAlreadyInCart(productToAdd, cartItems)}); 
  }

  // ! used in CheckoutLineItem component 
  const decreaseQty = (product) => {
    dispatch({type: ACTION_TYPES.SET_CART_ITEMS, payload: reduceQtyByOne(cartItems, product)});
  }

  const increaseQty = (product) => {
    dispatch({type: ACTION_TYPES.SET_CART_ITEMS, payload: increaseQtyByOne(cartItems, product)});
  }

  const removeFromCart = (product) => {
    dispatch({type: ACTION_TYPES.SET_CART_ITEMS, payload: removeItem(cartItems, product)});
  }

  const setCartVisible = () => {
    dispatch({type: ACTION_TYPES.TOGGLE_CART})
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

