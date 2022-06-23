import React, {useState} from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [togglMenu,setToggleMenu]=useState(false)
  return (
    <nav className='nav-bar'>
      <div className='nav-bar-logo'>
        <img src="/img/gericht.png" alt="" />
      </div>
      <ul className='nav-links'>
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#"> Page </a> </li>
        <li> <a href="#"> Contact Us</a> </li>
        <li> <a href="#"> Blog </a> </li>
        <li> <a href="#"> Landing </a> </li>
      </ul>

      <div className='nav-bar-registre'>
        <a href="#">Log In/Registration</a>
        <div/>
        <a href="#">Book Table</a>
      </div>

      <div className='nav-bar-menu-mobile'>
        <GiHamburgerMenu className='nav-bar-icon' onClick={()=>setToggleMenu(true)} />
        {togglMenu &&(
          
          <div className='nav-bar-mobile slide-bottom'>
          <MdOutlineRestaurantMenu className='nav-bar-icon' onClick={()=>setToggleMenu(false)} />
          <ul className='nav-links-mobile'>
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#"> Page </a> </li>
            <li> <a href="#"> Contact Us</a> </li>
            <li> <a href="#"> Blog </a> </li>
            <li> <a href="#"> Landing </a> </li>
          </ul>


        </div>

        )}
        
      </div>


    </nav>
  )
}

export default Navbar