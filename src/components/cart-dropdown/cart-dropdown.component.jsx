import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  
  const navigate = useNavigate();

  const goToCheckoutPage = () => navigate('/checkout');

  return(
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id} item={item} />
          )
        })}
      </div>
      <Button onClick={goToCheckoutPage}>Checkout</Button>
    </div>
  );
}


export default CartDropdown; 