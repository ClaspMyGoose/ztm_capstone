import { useEffect } from 'react';
import CheckoutLineItem from '../../components/checkout-line-item/checkout-line-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsSelector, cartTotalSelector } from '../../store/cart/cart.selector';
import { toggleCartDropdownAction } from '../../store/cart/cart.action';

 
const Checkout = () => {
  
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector); 
  const cartTotal = useSelector(cartTotalSelector);
  

  useEffect(() => {
    dispatch(toggleCartDropdownAction());
    // eslint-disable-next-line
  }, [])

  
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