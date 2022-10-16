import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Value, Arrow, RemoveContainer } from './checkout-line-item.styles';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../store/cart/cart.selector';
import { setCartItemsAction } from '../../store/cart/cart.action';
import { CART_ACTION } from '../../store/cart/cart.action';


const CheckoutLineItem = ({ item }) => {

  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector)

  const { name, price, qty, imageUrl } = item;

  
  const subQty = () => {
    dispatch(setCartItemsAction(CART_ACTION.REDUCE_QTY, item, cartItems)); 
  }; 

  const addQty = () => {
    dispatch(setCartItemsAction(CART_ACTION.INCREASE_QTY, item, cartItems));
  }; 

  const removeItem = () => {
    dispatch(setCartItemsAction(CART_ACTION.REMOVE_ITEM, item, cartItems)); 
  }; 


  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={subQty}>
          &#10094;
        </Arrow>
        <Value>{qty}</Value>
        <Arrow onClick={addQty}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>${price * qty}</Price>
      <RemoveContainer onClick={removeItem}>&#10005;</RemoveContainer> 
    </CheckoutItemContainer>
  );
}

export default CheckoutLineItem;