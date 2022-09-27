import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';


const ProductCard = ({ product }) => {
  const { setCartQty, cartItems, setCartItems, itemQty, setItemQty } = useContext(CartContext);
  
  console.log(cartItems);
  const { id, name, imageUrl, price } = product; 

  // ? will probably end up using id with firebase? 

  const addToCart = () => {
    setCartQty(prevState => {
      return prevState += 1;
    })
  }

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