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
    <div className="checkout-item-container">
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={subQty}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={addQty}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price * qty}</span>
      <div className='remove-container' onClick={removeItem}>&#10005;</div> 
    </div>
  );
}

export default CheckoutLineItem;