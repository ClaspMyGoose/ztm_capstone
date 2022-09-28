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
      <div className='checkout-line-titles'>
        <div>
          <h2 className='title'>Product</h2>
        </div>
        <div>
          <h2 className='title'>Description</h2>
        </div>
        <div>
          <h2 className='title'>Quantity</h2>
        </div>
        <div>
          <h2 className='title'>Price</h2>
        </div>
        <div>
          <h2 className='title'>Remove</h2>
        </div>
      </div>
      {cartItems.map((item) => {
        return (
          <CheckoutLineItem key={item.id} item={item} />
          )
        })}
      <div className='checkout-total'>
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
    
  );

}

export default Checkout