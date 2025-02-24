
//import { Navigate } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Products from "./pages/Products";
import LoginSignup from "./pages/LoginSignup";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
          <Route path='/la-liga' element={<Shop category="la-liga"/>}/>
          <Route path="/premier-league" element={<Shop category="premier-league"/>}/>
          <Route path="/serie-a" element={<Shop category="serie-a"/>}/>
        <Route path="/product" element={<Products/>}/>
          <Route path=':productId' element={<Products/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    );
}

export default App;
