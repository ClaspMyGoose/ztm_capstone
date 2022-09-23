import { Outlet, Link } from 'react-router-dom'; 
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';



const NavigationBar = () => {

  const { currentUser } = useContext(UserContext);

  // TODO this will change 
  const logButtonText = currentUser ? 'LOGIN' : 'SIGN OUT';


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/login'>{logButtonText}</Link>
          <Link className='nav-link' to='/shop'>SHOP</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
};


export default NavigationBar