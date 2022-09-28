import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';


const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  
  const addToCart = () => {
    addItemToCart(product); 
  }
  
  const { name, imageUrl, price } = product; 

   

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`product: ${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard