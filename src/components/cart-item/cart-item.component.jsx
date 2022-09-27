import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  
  const { name, qty } = item
  
  return(
    <div className="cart-item-container">
      <h2>{name}</h2>
      <span>{qty}</span>
    </div>
  )

}

export default CartItem