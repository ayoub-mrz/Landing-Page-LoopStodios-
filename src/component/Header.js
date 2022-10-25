import React from 'react'
import Logo from './../images/logo.svg';
import Hamburger from './../images/icon-hamburger.svg';
import Close from './../images/icon-close.svg';


export default function Header() {

  function controlUl(val1, val2, val3) {
    document.querySelector('.menu').style.display = val1;
    document.querySelector('.mobile-v img:nth-child(2)').style.display = val2;
    document.querySelector('.mobile-v img:nth-child(3)').style.display = val3;
  }

  function handleOpen() {
    controlUl("flex", "none", "block")
  }
  
  function handleClose() {
    controlUl("none", "block", "none")
  }

  return (

    <div className='headers'>
      <header className="mobile-v">
        <img src={Logo} alt='Logo' /> 
        <img src={Hamburger} alt='Hamburger' onClick={handleOpen} /> 
        <img src={Close} alt='Close' onClick={handleClose} /> 
        <ul className='menu'> 
          <li><a href=''>About</a></li>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Events</a></li>
          <li><a href=''>Products</a></li>
          <li><a href=''>Support</a></li>
        </ul>
      </header>
      <header className='desktop-v'>
        <img src={Logo} alt='Logo' /> 
        <ul>
          <li><a href=''>About</a></li>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Events</a></li>
          <li><a href=''>Products</a></li>
          <li><a href=''>Support</a></li>
        </ul>
      </header>
    </div>

  )
}
