import React from 'react';
import logo from './assets/logo.webp';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login';
function Header() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={logo} width="50" className="rounded-xl" alt="Logo" />
        <span className="font-bold text-xl">ShoeStore</span>
      </div>
      <ul className="flex gap-6">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;
