import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'; 


const CartIcon = () => {

  const { cartVisible, setCartVisible, cartQty } = useContext(CartContext);
  
  const toggleCartOverlay = () => {
    setCartVisible(!cartVisible);
  }

  return(
    <CartIconContainer onClick={toggleCartOverlay}>
      <ShoppingIcon/>
      <ItemCount>{cartQty}</ItemCount>
    </CartIconContainer>
  ); 

};

export default CartIcon; 
