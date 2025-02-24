import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, Links } from 'react-router';


const Navbar = () => {

  const [menu, setMenu] = useState("Home");
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='company logo'/>
        <p> Shirl's Sport Store </p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> 
          <Link style={{textDecoration: 'none'}} to='/'> Home </Link> 
          {menu ==="home"?<hr/>:<></>}
           </li>
        <li onClick={()=>{setMenu("about")}}>
          <Link style={{textDecoration: 'none'}} to='/about'> About </Link>
           {menu ==="about"?<hr/>:<></>}
            </li>
        <li onClick={()=>{setMenu("contact")}}>
          <Link style={{textDecoration: 'none'}} to='/contact'> Contact </Link>
          {menu ==="contact"?<hr/>:<></>}
           </li>
        <li onClick={()=>{setMenu("shop")}}>
          <Link style={{textDecoration: 'none'}} to='Shop'> Shop </Link>
          {menu ==="shop"?<hr/>:<></>} 
          </li>
      </ul>
      <div className="nav-login-cart">
        <button> 
          <Link style={{textDecoration: 'none'}} to='/loginsignup'> Login </Link>
          </button>
        <img src={cart_icon} alt="icon of a cart" />
        <div className="nav-cart-count"> 
          <Link style={{textDecoration: 'none'}} to='/cart'> 0 </Link> 
          </div>
      </div>
    </div>
  )
};  

export default Navbar