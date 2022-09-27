import { Outlet, Link } from 'react-router-dom'; 
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { logOut } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';



const NavigationBar = () => {


  const { currentUser } = useContext(UserContext);  
  const { cartVisible } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>SHOP</Link>
          { currentUser ? (
            <span className='nav-link' onClick={logOut}>SIGN OUT</span>
          ) : (
            <Link className='nav-link' to='/login'>SIGN IN</Link>
          ) }
          <CartIcon />
        </div>
        { cartVisible && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>
  )
};


export default NavigationBar