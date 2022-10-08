import { ProductCardContainer, Image, Footer, Name, Price, ProductCardButton } from './product-card.styles'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';


const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  
  const addToCart = () => {
    addItemToCart(product); 
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