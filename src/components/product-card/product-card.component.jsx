import './product-card.styles.scss'
import Button from '../button/button.component';


const ProductCard = ({ product }) => {

  const { id, name, imageUrl, price } = product; 

  // ? will probably end up using id with firebase? 

  const addToCart = () => {}

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