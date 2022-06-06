import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    let path = window.location.pathname
    
    return (
        <div className='navbar'>
        <Link to='/'>Snow Market </Link>
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
