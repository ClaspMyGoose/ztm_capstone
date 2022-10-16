import { createSelector } from "reselect";


const selectCartSlice = (state) => state.cart

export const cartVisibleSelector = (state) => state.cart.cartVisible;

export const cartItemsSelector = createSelector([selectCartSlice], (cartSlice) => cartSlice.cartItems); 

export const cartQtySelector = createSelector([cartItemsSelector], (cartItems) => {
  const cartQty = cartItems.reduce((quantityRunningTotal, currentItem) => {
    return currentItem.qty + quantityRunningTotal
  },0)
  return cartQty;
});

export const cartTotalSelector = createSelector([cartItemsSelector], (cartItems) => {
  const cartTotal = cartItems.reduce((runningTotal, currentItem) => {
    const currentItemTotal = currentItem.qty * currentItem.price;
    return runningTotal + currentItemTotal
  },0)
  return cartTotal
});
