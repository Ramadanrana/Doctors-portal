import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 pr-5 text-4xl">
      <Link to='/'>Home</Link>
      <Link to='/appointment'>Appointment</Link>
      <Link to='/login'>Login</Link>
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-4xl">Doctors Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-4 nav">
      <Link to='/'>Home</Link>
      <Link to='/appointment'>Appointment</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact us</Link>
      <Link to='/login'>Login</Link>
      
      
        
        
      
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;