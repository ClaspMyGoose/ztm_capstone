import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Value, Arrow, RemoveContainer } from './checkout-line-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutLineItem = ({ item }) => {


  const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);


  const { name, price, qty, imageUrl } = item;


  // ! implement
  const subQty = () => {
    decreaseQty(item); 
  }; 

  const addQty = () => {
    increaseQty(item);
  }; 


  const removeItem = () => {
    removeFromCart(item); 
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