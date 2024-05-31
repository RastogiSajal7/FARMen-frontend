import React from "react";
import { logout } from "../HOC/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxLine, RiHome5Fill } from "react-icons/ri";
import { GiFarmer } from "react-icons/gi";
import { CiWheat } from "react-icons/ci";
import { BiSolidLogIn } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import man from "../assets/images/man.jpg";
import { ImUser } from "react-icons/im";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="col-span-1 p-2 bg-emerald-900 pr-3 ">
        <div className="flex font-bold text-xl text-white ">FARMen</div>
        <div className="flex flex-col items-start mt-20 -ml-3 gap-2">
          {/* Home */}
          <Link to="/home">
            <div className="flex justify-center">
              <div className="rounded-2xl  p-3 hover:bg-white hover:text-slate-900 text-white text-3xl ">
                <RiHome5Fill />
              </div>
              <div className="home text-white text-md mt-4  ">Home</div>
            </div>
          </Link>

          {/* Farmer Section */}
          <Link to="/farmerBuy">
            <div className="flex justify-center ">
              <div className="rounded-2xl p-3 hover:bg-white hover:text-slate-900 text-white text-3xl">
                <GiFarmer />
              </div>
              <div className="home text-white text-md mt-4  ">
                Farmer Section
              </div>
            </div>
          </Link>

          {/* Customer Section */}
          <Link to="/home">
            <div className="flex content-center ">
              <div className="rounded-2xl p-2 hover:bg-white hover:text-slate-900 text-white text-4xl">
                <CiWheat />
              </div>
              <div className="home text-white text-md mt-3 ml-1  ">
                Agri Buy
              </div>
            </div>
          </Link>

          {/* Sign Up */}
          <Link to="/register">
            <div className="flex content-center">
              <div className="rounded-2xl p-3 hover:bg-white hover:text-slate-900 text-white text-3xl">
                <RiLoginBoxLine />
              </div>
              <div className="home text-white text-md mt-4  ">Sign Up</div>
            </div>
          </Link>

          {/* Login */}
          <Link to="/login">
            <div className="flex content-center">
              <div className="rounded-2xl p-3 hover:bg-white hover:text-slate-900 text-white text-3xl">
                <BiSolidLogIn />
              </div>
              <div className="home text-white text-md mt-4  ">Log In</div>
            </div>
          </Link>

          {/* LogOut */}
          <div className="flex content-center">
            <button
              onClick={handleLogout}
              className="rounded-2xl p-3 hover:bg-white hover:text-slate-900 text-white text-3xl"
            >
              <IoLogOut />
            </button>
            <div className="home text-white text-md mt-4  ">Log Out</div>
          </div>

          {/* Account Section */}
          <Link to="/account">
            <div className="flex content-center">
              <div className="rounded-2xl p-3 hover:bg-white hover:text-slate-900 text-white text-3xl">
                <IoMdSettings />
              </div>
              <div className="home text-white text-md mt-4  ">Account</div>
            </div>
          </Link>
        </div>
         <div className="user text-center mt-8 text-8xl text-lime-200">
         <ImUser/>
         </div>
      </div>
    </>
  );
};

export default Dashboard;
