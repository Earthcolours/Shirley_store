
//import { Navigate } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Products from './pages/Product';
import LoginSignup from "./pages/LoginSignup";
import Hero from './components/Hero/Hero';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
          <Route path='/laliga' element={<ShopCategory banner={men_banner} category ="la-liga"/>}/>
          <Route path='/premierleague' element={<ShopCategory banner={women_banner} category="premier-league"/>}/>
          <Route path='/seriea' element={<ShopCategory banner={kids_banner} category="serie-a"/>}/>
        <Route path='/product' element={<Products/>}/>
          <Route path=':productId' element={<Products/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    );
}

export default App;
