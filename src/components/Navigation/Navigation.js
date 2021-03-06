import React from 'react';
import './_Navigation.scss';
import { NavLink as Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <div className="header__container">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className="main__nav">
        <ul>
          <li><Link to='/' exact>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/book'>Book</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;