import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';



const App = () => {
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
