import { Outlet } from 'react-router-dom'; 
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectCurrentUser } from '../../store/user/user.selector';
import { cartVisibleSelector } from '../../store/cart/cart.selector';

import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles';
import { logOutUserStart } from '../../store/user/user.action';



const NavigationBar = () => {

  const currentUser = useSelector(selectCurrentUser);
  const cartVisible = useSelector(cartVisibleSelector);
  const dispatch = useDispatch(); 

  const logOutFirebaseAndUI = () => {
    
    dispatch(logOutUserStart());
  }

  
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          { currentUser ? (
            <NavLink as='span' onClick={logOutFirebaseAndUI}>SIGN OUT</NavLink>
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