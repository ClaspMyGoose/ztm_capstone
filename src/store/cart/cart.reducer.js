import ACTION_TYPES from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  cartVisible: false
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {

  const { type, payload } = action; 

  const { cartVisible } = state


  switch(type) { 
    case(ACTION_TYPES.SET_CART_ITEMS):
      return {
        ...state,
        cartItems: payload
      }
    case (ACTION_TYPES.TOGGLE_CART):
      return {
        ...state, 
        cartVisible: !cartVisible
      }
    default: 
      return state; 
  }
}