import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutLineItem from '../../components/checkout-line-item/checkout-line-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

 
const Checkout = () => {

  const { cartItems, cartTotal, cartVisible, setCartVisible } = useContext(CartContext);
  
  const hideCartDropdownOnRender = () => {
    if (cartVisible) {
      setCartVisible(!cartVisible)
    }
  }

  useEffect(() => hideCartDropdownOnRender(), [])

  return(
    <CheckoutContainer>
      <CheckoutHeader>
        <div>
          <HeaderBlock>Product</HeaderBlock>
        </div>
        <div>
          <HeaderBlock>Description</HeaderBlock>
        </div>
        <div>
          <HeaderBlock>Quantity</HeaderBlock>
        </div>
        <div>
          <HeaderBlock>Price</HeaderBlock>
        </div>
        <div>
          <HeaderBlock className='remove'>Remove</HeaderBlock>
        </div>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return (
          <CheckoutLineItem key={item.id} item={item} />
          )
        })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
    
  );

}

export default Checkout