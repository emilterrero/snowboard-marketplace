import '../App.css';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

function Navbar({ menu, setMenu }) { 
    let path = window.location.pathname
    let navIcon = document.querySelector('.nav-icon')

    const dropDown = () => {
        console.log('dropmenu clicked');
        setMenu(!menu);
    }


    return (
        <div className='navbar'>


        <Link to='/'>Snow Market </Link>
        <div onClick={dropDown} className='nav-icon'>
        <BiMenu />
        </div>

        <div className='nav-ul'>
        <ul>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/technology'>Technology</Link></li>
        </ul>
        </div>


        </div>
    );
}

export default Navbar;
