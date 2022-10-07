import { CartItemContainer, CartItemImage, ItemDetails, ItemName } from './cart-item.styles';

const CartItem = ({ item }) => {
  
  const { name, qty, imageUrl, price } = item
  
  return(
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>{qty} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )

}

export default CartItem