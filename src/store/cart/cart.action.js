import ACTION_TYPES from "./cart.types";

export const CART_ACTION = {
  ADD_ITEM: 'add_item',
  REDUCE_QTY: 'reduce_qty',
  INCREASE_QTY: 'increase_qty',
  REMOVE_ITEM: 'remove_item'
}


export const setCartItemsAction = (cartAction, product, cartItems) => { 

  var newCartItems;
  switch(cartAction) {
    case CART_ACTION.ADD_ITEM:
      newCartItems = itemAlreadyInCart(product, cartItems);
      return {
        type: ACTION_TYPES.SET_CART_ITEMS, 
        payload: newCartItems
      }
    case CART_ACTION.REDUCE_QTY: 
      newCartItems = reduceQtyByOne(cartItems, product);
      return {
        type: ACTION_TYPES.SET_CART_ITEMS, 
        payload: newCartItems
      }
    case CART_ACTION.INCREASE_QTY:
      newCartItems = increaseQtyByOne(cartItems, product);
      return {
        type: ACTION_TYPES.SET_CART_ITEMS, 
        payload: newCartItems
      }
    case CART_ACTION.REMOVE_ITEM:
      newCartItems = removeItem(cartItems, product)
      return {
        type: ACTION_TYPES.SET_CART_ITEMS, 
        payload: newCartItems
      }
    default:
      throw new Error(`unhandled type: ${cartAction} in Cart Reducer Actions`)
  }
};


export const toggleCartDropdownAction = () => {
  return {
    type: ACTION_TYPES.TOGGLE_CART
  }
}


// helper function 
const itemAlreadyInCart = (productToAdd, cartItems) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.qty += 1;
      return [...cartItems]
    }
  }
  return [...cartItems, {...productToAdd, qty: 1}];  
}

// helper function
const reduceQtyByOne = (cartItems, productToReduce ) => {
  const locatedProduct = cartItems.find(item => item.id === productToReduce.id);
  if (locatedProduct.qty === 1) {
    return  [...cartItems]
  } 
  locatedProduct.qty -= 1; 
  return  [...cartItems]
}


// helper function 
const increaseQtyByOne = (cartItems, productToIncrease) => {
  const locatedProduct = cartItems.find(item => item.id === productToIncrease.id); 
  locatedProduct.qty += 1; 
  return [...cartItems]
}

// helper function
const removeItem = (cartItems, productToRemove) => {

  return cartItems.filter(item => item.id !== productToRemove.id)
}