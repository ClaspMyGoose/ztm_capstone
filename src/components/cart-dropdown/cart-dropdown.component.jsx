import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)

  return(
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id} item={item} />
          )
        })}
      </div>
      <Link to='/checkout'><Button>Checkout</Button></Link>
    </div>
  );
}


export default CartDropdown; 