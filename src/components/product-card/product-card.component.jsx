import { ProductCardContainer, Image, Footer, Name, Price, ProductCardButton } from './product-card.styles'
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useSelector, useDispatch } from 'react-redux';
import { setCartItemsAction } from '../../store/cart/cart.action'; 
import { cartItemsSelector } from '../../store/cart/cart.selector';
import { CART_ACTION } from '../../store/cart/cart.action';


const ProductCard = ({ product }) => {
  

  const dispatch = useDispatch(); 

  const cartItems = useSelector(cartItemsSelector); 
  
  
  const addToCart = () => {
    dispatch(setCartItemsAction(CART_ACTION.ADD_ITEM, product, cartItems))
  }
  
  const { name, imageUrl, price } = product; 

   

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`product: ${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductCardButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to Cart</ProductCardButton>
    </ProductCardContainer>
  )
}

export default ProductCard