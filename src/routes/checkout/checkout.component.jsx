import './checkout.styles.scss'; 
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutLineItem from '../../components/checkout-line-item/checkout-line-item.component';



 
const Checkout = () => {

  const { cartItems, cartTotal, cartVisible, setCartVisible } = useContext(CartContext);
  
  const hideCartDropdownOnRender = () => {
    if (cartVisible) {
      setCartVisible(!cartVisible)
    }
  }

  useEffect(() => hideCartDropdownOnRender(), [])

  return(
    <div className="checkout-container">
      <div className='checkout-header'>
        <div>
          <span className='header-block'>Product</span>
        </div>
        <div>
          <span className='header-block'>Description</span>
        </div>
        <div>
          <span className='header-block'>Quantity</span>
        </div>
        <div>
          <span className='header-block'>Price</span>
        </div>
        <div>
          <span className='header-block'>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return (
          <CheckoutLineItem key={item.id} item={item} />
          )
        })}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
    
  );

}

export default Checkout