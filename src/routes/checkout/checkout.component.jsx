import './checkout.styles.scss'; 
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutLineItem from '../../components/checkout-line-item/checkout-line-item.component';

 
const Checkout = () => {

  const { cartItems, cartVisible, setCartVisible } = useContext(CartContext);
  
  const hideCartDropdownOnRender = () => {
    if (cartVisible) {
      setCartVisible(!cartVisible)
    }
  }

  useEffect(() => hideCartDropdownOnRender(), [])

  return(
    <div className="checkout-container">
      {cartItems.map((item) => <CheckoutLineItem key={item.id} item={item} /> )}
    </div>
  );

}

export default Checkout