import { Outlet } from 'react-router-dom'; 
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { logOut } from '../../utils/firebase/firebase.utils';


import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles';



const NavigationBar = () => {


  const { currentUser } = useContext(UserContext);  
  const { cartVisible } = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          { currentUser ? (
            <NavLink as='span' onClick={logOut}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/login'>SIGN IN</NavLink>
          ) }
          <CartIcon />
        </NavLinkContainer>
        { cartVisible && <CartDropdown /> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
};


export default NavigationBar