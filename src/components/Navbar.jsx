import React, { useEffect, useState } from "react";
import man from "../assets/images/man.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../HOC/AuthService";
import { FaOpencart } from "react-icons/fa";
import { ImUser } from "react-icons/im";

const Navbar = ({ counter }) => {
  const [userDetails, setUserDeatils] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("user"));
    setUserDeatils(storedUserDetails);
    if (storedUserDetails && storedUserDetails.profileImg) {
      setProfileImgUrl(
        `https://farmen.onrender.com/${storedUserDetails.profileImg}`
      );
    }
  }, [localStorage.getItem("user")]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-14 bg-emerald-900 flex justify-between items-center fixed top-0 left-0 rounded-b-lg px-4">
        <div>
          <Link to="/" className="text-white text-2xl">
            FARMen
          </Link>
        </div>
        <div className="flex items-center p-2">
          <Link to="/" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            Home
          </Link>
          <Link to="/farmerBuy" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            Farmer Section
          </Link>
          <Link to="/home" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            Buy Agri
          </Link>
          <Link to="/register" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            SignUp
          </Link>
          <Link to="/login" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            Login
          </Link>
          <button
            onClick={handleLogout}
            className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full"
          >
            Log Out
          </button>
          <Link to="/about" className="text-white px-5 py-2 hover:bg-emerald-800 rounded-full">
            About Us
          </Link>
          <Link
            to="#"
            className="text-white px-5 py-2 text-2xl hover:bg-emerald-800 rounded-full flex"
          >
            <FaOpencart />
            <div className="text-sm text-slate-200 font-semibold fixed ml-6 ">
              {counter}
            </div>
          </Link>
          <Link to="/account" className="text-white text-2xl">
            <div className="h-full">
              {profileImgUrl ? (
                <img
                  className="h-10"
                  src={profileImgUrl}
                  alt="userImg"
                  onError={(e) => {
                    if (e.target.src !== man) {
                      e.target.src = man;
                    }
                  }}
                />
              ) : (
                <img className="h-10 object-cover" src={man} alt="userImg" />
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
