import React from "react";
import { logout } from "../HOC/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxLine, RiHome5Fill } from "react-icons/ri";
import { GiFarmer } from "react-icons/gi";
import { CiWheat } from "react-icons/ci";
import { BiSolidLogIn } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { ImUser } from "react-icons/im";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { to: "/", icon: <RiHome5Fill />, label: "Home" },
    { to: "/farmerBuy", icon: <GiFarmer />, label: "Farmer Section" },
    { to: "/home", icon: <CiWheat />, label: "Agri Buy" },
    { to: "/register", icon: <RiLoginBoxLine />, label: "Sign Up" },
    { to: "/login", icon: <BiSolidLogIn />, label: "Log In" },
    { onClick: handleLogout, icon: <IoLogOut />, label: "Log Out", isButton: true },
    { to: "/account", icon: <IoMdSettings />, label: "Account" },
    { to: "/about", icon: <ImUser />, label: "About Us" },
  ];

  return (
    <div className="p-2 bg-emerald-900 pr-3 h-screen">
      <div className="flex font-bold text-xl text-white">FARMen</div>
      <div className="flex flex-col items-start mt-20 gap-2">
        {menuItems.map((item, index) => (
          item.isButton ? (
            <button
              key={index}
              onClick={item.onClick}
              className="flex items-center gap-2 w-full p-2 rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              <span className="flex-shrink-0 text-3xl">{item.icon}</span>
              <span className="text-md flex-grow text-start">{item.label}</span>
            </button>
          ) : (
            <Link key={index} to={item.to} className="w-full">
              <div className="flex items-center gap-2 w-full p-2 rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors duration-200">
                <span className="flex-shrink-0 text-3xl">{item.icon}</span>
                <span className="text-md flex-grow">{item.label}</span>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
