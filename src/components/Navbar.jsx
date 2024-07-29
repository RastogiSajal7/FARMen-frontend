import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { logout } from '../HOC/AuthService';
import { FaOpencart } from "react-icons/fa";
import { ImUser } from "react-icons/im";

const Navbar = ({ counter }) => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/");
  }

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode); 
  }

  return (
    <>
      <div className={`w-full ${darkMode? 'bg-black' : 'bg-emerald-900'} flex justify-between items-center fixed top-0 left-0 rounded-b-lg px-4`}>
        <div>
          <Link to="/" className="text-white text-2xl">FARMen</Link>
        </div>
        <div className="flex items-center p-2">
          <button
            className="text-white px-5 py-2 hover:bg-black"
            onClick={handleToggleDarkMode}
          >
            {darkMode? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link to="/" className="text-white px-5 py-2 hover:bg-black">Home</Link>
          <Link to="/farmerBuy" className="text-white px-5 py-2 hover:bg-black">Farmer Section</Link>
          <Link to="/home" className="text-white px-5 py-2 hover:bg-black">Buy Agri</Link>
          <Link to="/register" className="text-white px-5 py-2 hover:bg-black">SignUp</Link>
          <Link to="/login" className="text-white px-5 py-2 hover:bg-black">Login</Link>
          <button onClick={handleLogout} className="text-white px-5 py-2 hover:bg-black">Log Out</button>
          <Link to="/about" className="text-white px-5 py-2 hover:bg-black">About Us</Link>
          <Link to="#" className="text-white px-5 py-2 text-2xl hover:bg-black flex"><FaOpencart /><div className="text-sm text-slate-200 font-semibold fixed ml-6 ">{counter}</div></Link>
          <Link to="/account" className="text-white text-2xl"> <ImUser/></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;