import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';


const App = () => {

  const dispatch = useDispatch();

  // dispatching a checkUserSession() from user.action.js, which starts off our isUserAuthenticated saga 
  useEffect(() => {
    dispatch(checkUserSession());
  }, [])



  return (
    <Routes>
      <Route path='/' element={ <NavigationBar /> }>
        <Route index element={ <Home/> } />
        <Route path='/shop/*' element={ <Shop/> } />
        <Route path='/login' element={ <Login />} />
        <Route path='/checkout' element={ <Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
