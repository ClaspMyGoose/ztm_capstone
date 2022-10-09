import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'; 


const CartIcon = () => {

  const { setCartVisible, cartQty } = useContext(CartContext);
  
  const toggleCartOverlay = () => {
    setCartVisible();
  }

  return(
    <CartIconContainer onClick={toggleCartOverlay}>
      <ShoppingIcon/>
      <ItemCount>{cartQty}</ItemCount>
    </CartIconContainer>
  ); 

};

export default CartIcon; 
