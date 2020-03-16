import React from 'react';
import './../styles/header.css';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div>
      <ul className='menu'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/our_services'>
          <li>Our services</li>
        </Link>
        <Link to='/sign_in'>
          <li>Sign In</li>
        </Link>



      </ul>
    </div>
  );
}
export default Header;
