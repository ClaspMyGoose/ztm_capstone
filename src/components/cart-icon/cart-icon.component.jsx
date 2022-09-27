import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'; 


const CartIcon = () => {

  const { cartVisible, setCartVisible, cartQty } = useContext(CartContext);
  
  const toggleCartOverlay = () => {
    setCartVisible(!cartVisible);
  }

  return(
    <div onClick={toggleCartOverlay} className='cart-icon-container'>
      <CartImage className='shopping-icon' />
      <span className='item-count'>{cartQty}</span>
    </div>
  ); 

};

export default CartIcon; 
