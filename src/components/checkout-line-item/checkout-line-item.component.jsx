import './checkout-line-item.styles.scss';
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
    <div className="checkout-line-container">
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className='name-container'><span>{name}</span></div>
      <div className="quantity-container">
        <span className='reduce' onClick={subQty}>&#60;</span>
        <span>{qty}</span>
        <span className='increase' onClick={addQty}>&#62;</span>
      </div>
      <div className='price-container'><span>${price * qty}</span></div>
      <div className='remove-container' onClick={removeItem}>X</div> 
    </div>
  );
}

export default CheckoutLineItem;