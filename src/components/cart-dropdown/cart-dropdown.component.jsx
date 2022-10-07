import { CartDropdownContainer, CartItems, EmptyMessage, CartDropdownButton } from './cart-dropdown.styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const emptyCart = (cartItems.length === 0); 

  const navigate = useNavigate();

  const goToCheckoutPage = () => navigate('/checkout');

  return(
    <CartDropdownContainer>
      <CartItems>
        {emptyCart && <EmptyMessage>No Items in Cart</EmptyMessage>}
        {!emptyCart && cartItems.map((item) => {
          return (
            <CartItem key={item.id} item={item} />
          )
        })}
      </CartItems>
      <CartDropdownButton buttonType={BUTTON_TYPE_CLASSES.button} onClick={goToCheckoutPage}>Checkout</CartDropdownButton>
    </CartDropdownContainer>
  );
}


export default CartDropdown; 