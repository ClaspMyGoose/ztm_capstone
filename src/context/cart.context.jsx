import { createContext, useReducer } from "react";

// will need 

// action types object 

const ACTION_TYPES = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  INCREASE_CART_QTY: 'INCREASE_CART_QTY',
  DECREASE_CART_QTY: 'DECREASE_CART_QTY',
  TOGGLE_CART: 'TOGGLE_CART'
}

// CartReducer function 

const cartReducer = (state, action) => {

  const { type, payload } = action; 

  const { cartQty, cartTotal, cartVisible } = state; 

  switch(type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cartItems: payload.cartItems,
        cartQty: cartQty + 1,
        cartTotal: cartTotal + payload.additionalTotal
      }

    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state, 
        cartItems: payload.cartItems, 
        cartQty: cartQty - payload.qtyRemoved,
        cartTotal: cartTotal - payload.totalRemoved
      }
    case 'INCREASE_CART_QTY':
      return {
        ...state, 
        cartItems: payload.cartItems,
        cartQty: cartQty + 1, 
        cartTotal: cartTotal + payload.additionalTotal
      }
    case 'DECREASE_CART_QTY':
      return {
        ...state, 
        cartItems: payload.cartItems,
        cartQty: cartQty - 1, 
        cartTotal: cartTotal - payload.decreasedTotal
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        cartVisible: !cartVisible
      }
    default: 
      throw new Error(`Unhandled type ${type} in CartReducer`)
  }


}

// initial state object 
const INITIAL_STATE = {
  cartItems: [],
  cartQty: 0,
  cartTotal: 0,
  cartVisible: false 
}



// functions that mimic what I'm exporting currently 


// ! helper function - determines if product already in cart and increments qty if so, otherwise adds product object with qty property
const itemAlreadyInCart = (productToAdd, cartItems) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.qty += 1;
      return {
        cartItems: [...cartItems],
        additionalTotal: productToAdd.price
      };
    }
  }
  return {
    cartItems: [...cartItems, {...productToAdd, qty: 1}],
    additionalTotal: productToAdd.price}
}
// ! helper function - reduce item cart qty by 1
const reduceQtyByOne = (cartItems, productToReduce ) => {
  const locatedProduct = cartItems.find(item => item.id === productToReduce.id);
  const { price } = locatedProduct;
  if (locatedProduct.qty === 1) {
    return {
      cartItems: [...cartItems],
      decreasedTotal: 0
    }; 
  } 
  locatedProduct.qty -= 1; 
  return {
    cartItems: [...cartItems],
    decreasedTotal: price
  }; 
}
// ! helper function - increase item cart qty by 1
const increaseQtyByOne = (cartItems, productToIncrease) => {
  const locatedProduct = cartItems.find(item => item.id === productToIncrease.id); 
  const { price } = locatedProduct;
  
  locatedProduct.qty += 1;

  return {
    cartItems: [...cartItems],
    additionalTotal: price
  };
}
// ! helper function - remove item from cart
const removeItem = (cartItems, productToRemove) => {
  
  const removedItem = cartItems.find(item => item.id === productToRemove.id); 
  const { qty, price } = removedItem; 
  
  return {
    cartItems: cartItems.filter(item => item.id !== productToRemove.id),
    qtyRemoved: qty,
    totalRemoved: qty * price
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



export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartQty, cartTotal, cartVisible } = state; 

  const addItemToCart = (productToAdd) => {
    dispatch({type: ACTION_TYPES.ADD_ITEM_TO_CART, payload: itemAlreadyInCart(productToAdd, cartItems)})
  }

  const removeFromCart = (productToRemove) => {
    dispatch({type: ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: removeItem(cartItems, productToRemove)})
  }

  const increaseQty = (productToIncrement) => {
    dispatch({type: ACTION_TYPES.INCREASE_CART_QTY, payload: increaseQtyByOne(cartItems, productToIncrement)})
  }

  const decreaseQty = (productToDecrement) => {
    dispatch({type: ACTION_TYPES.DECREASE_CART_QTY, payload: reduceQtyByOne(cartItems, productToDecrement) })
  }

  const setCartVisible = () => {
    dispatch({type: ACTION_TYPES.TOGGLE_CART})
  }

  // const [cartQty, setCartQty] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0); 
  // const [cartVisible, setCartVisible] = useState(false);
  // const [cartItems, setCartItems] = useState([]); 

  // useEffect(() => {
  //   setCartQty(() => cartItems.reduce((prevVal, currVal) => {
  //     return prevVal += currVal.qty
  //   }, 0));
  // }, [cartItems]); 

  // useEffect(() => {
  //   setCartTotal(() => cartItems.reduce((prevVal, currentVal) => {
  //     return prevVal + (currentVal.qty * currentVal.price);
  //   }, 0))
  // }, [cartItems]);

  // ! used in CartDropdown component 
  // const addItemToCart = (productToAdd) => {
  //   setCartItems(itemAlreadyInCart(productToAdd, cartItems)); 
  // }

  // ! used in CheckoutLineItem component 
  // const decreaseQty = (product) => {
  //   setCartItems(reduceQtyByOne(cartItems, product));
  // }

  // const increaseQty = (product) => {
  //   setCartItems(increaseQtyByOne(cartItems, product));
  // }

  // const removeFromCart = (product) => {
  //   setCartItems(removeItem(cartItems, product));
  // }


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