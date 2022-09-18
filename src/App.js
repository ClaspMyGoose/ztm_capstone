import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';

const Shop = () => (
  <div>
    I am the shop
  </div>
)


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <NavigationBar /> }>
        <Route index element={ <Home/> } />
        <Route path='/shop' element={ <Shop/> } />
        <Route path='/login' element={ <Login />} />
      </Route>
    </Routes>
  );
}

export default App;
