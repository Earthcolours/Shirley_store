import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, Links } from 'react-router';


const Navbar = () => {

  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='company logo'/>
        <p> Shirl's Sport Store </p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> 
          <Link style={{textDecoration: 'none'}} to='/'> Shop </Link> 
          {menu ==="shop"?<hr/>:<></>}
           </li>
        <li onClick={()=>{setMenu("laliga")}}>
          <Link style={{textDecoration: 'none'}} to='/laliga'> La Liga </Link>
           {menu ==="laliga"?<hr/>:<></>}
            </li>
        <li onClick={()=>{setMenu("seriea")}}>
          <Link style={{textDecoration: 'none'}} to='/seriea'> Serie-A </Link>
          {menu ==="contact"?<hr/>:<></>}
           </li>
        <li onClick={()=>{setMenu("premierleague")}}>
          <Link style={{textDecoration: 'none'}} to='premierleague'> premierleague </Link>
          {menu ==="premierleague"?<hr/>:<></>} 
          </li>
      </ul>
      <div className="nav-login-cart">
        <button> 
          <Link style={{textDecoration: 'none'}} to='/loginsignup'> Login </Link>
          </button>
        <img src={cart_icon} alt="icon of a cart" />
        <div className="nav-cart-count">
          <Link style={{textDecoration: 'none'}} to='/cart'> {getTotalCartItems} </Link> 
          </div>
      </div>
    </div>
  )
};  

export default Navbar