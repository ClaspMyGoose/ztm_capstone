import { Outlet, Link } from 'react-router-dom'; 
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { logOut } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';



const NavigationBar = () => {

  const { currentUser } = useContext(UserContext);  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className='logo' />
        </Link>
        <div className="nav-links-container">
          { currentUser ? (
            <span className='nav-link' onClick={logOut}>SIGN OUT</span>
          ) : (
            <Link className='nav-link' to='/login'>SIGN IN</Link>
          ) }
          <Link className='nav-link' to='/shop'>SHOP</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
};


export default NavigationBar