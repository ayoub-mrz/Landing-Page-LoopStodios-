import React from 'react'
import Logo from './../images/logo.svg';
import Facebook from './../images/icon-facebook.svg'
import Twitter from './../images/icon-twitter.svg'
import Pinterest from './../images/icon-pinterest.svg'
import Instagram from './../images/icon-instagram.svg'

export default function Footer() {



  return (
    <footer>
        <div className='container'>
            <div className='side-1'>
                <img className='logo' src={Logo} alt='logo'/>
                <ul>
                <li><a href=''>About</a></li>
                <li><a href=''>Careers</a></li>
                <li><a href=''>Events</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''>Support</a></li>
                </ul>
            </div>
            <div className='side-2'>
                <div className='icons'>
                    <img src={Facebook} alt='Facebook' />
                    <img src={Twitter} alt='Twitter' />
                    <img src={Pinterest} alt='Pinterest' />
                    <img src={Instagram} alt='Instagram' />
                </div>
                <div className='copyRight'>
                    © 2021 Loopstudios. All rights reserved.
                    </div>
            </div>
        </div>
    </footer>
  )
}
