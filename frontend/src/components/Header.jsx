import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">BusinessLogo</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><Link to="/signup" className="hover:text-gray-400">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
