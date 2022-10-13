import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { useEffect } from 'react';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils'; 
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((changeResult) => {
      dispatch(setCurrentUser(changeResult)); 
    })

    return unsubscribe; 
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
