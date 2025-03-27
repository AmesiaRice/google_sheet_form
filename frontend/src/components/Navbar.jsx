import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({user,onLogout}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="sticky left-0 top-0 w-full h-24 bg-gray-50 text-gray-700 font-bold flex justify-between items-center px-6 z-50 shadow-lg">
      <h1 className="text-3xl font-bold text-orange-500">Amasia Rice</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 cursor-pointer">
        {
          user ? <li onClick={onLogout} className="hover:text-orange-500 transition duration-300">Logout</li>:"Login"
        }
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${nav ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}> 
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-orange-500">Amasia Rice</h1>
          <AiOutlineClose size={25} className="cursor-pointer" onClick={handleNav} />
        </div>

        <ul className="mt-5 space-y-4 px-6">
          <NavLink to="/" onClick={handleNav} className="block hover:text-orange-500 transition duration-300">
            <li>Dashboard</li>
          </NavLink>
        </ul>
        <ul className="mt-5 space-y-4 px-6">
          <NavLink to="/form" onClick={handleNav} className="block hover:text-orange-500 transition duration-300">
            <li>Google Form</li>
          </NavLink>
        </ul>
        <ul className="mt-5 space-y-4 px-6">
          <NavLink onClick={onLogout} className="block hover:text-orange-500 transition duration-300">
            <li>Logout</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
