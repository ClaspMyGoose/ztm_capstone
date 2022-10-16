
import { useSelector, useDispatch } from 'react-redux';
import { cartQtySelector } from '../../store/cart/cart.selector';
import { toggleCartDropdownAction } from '../../store/cart/cart.action'


import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'; 


const CartIcon = () => {

  const dispatch = useDispatch();

  const cartQty = useSelector(cartQtySelector)
  
  const toggleCartOverlay = () => {
    dispatch(toggleCartDropdownAction())
  }

  return(
    <CartIconContainer onClick={toggleCartOverlay}>
      <ShoppingIcon/>
      <ItemCount>{cartQty}</ItemCount>
    </CartIconContainer>
  ); 

};

export default CartIcon; 
