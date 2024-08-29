import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {login} from "../HOC/AuthService";
import farmers from "../assets/images/farmercoatbg.png";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 
  //creating objects to send data

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await login(email, password);
      setLoading(false);
      if (success) {
        setEmail("");
        setPassword("");
        navigate(location.state?.from || "/"); // Redirect to previous location
        toast.success("Successfully logged In");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.info(`An error occurred during login: ${error.response?.data.message || "Please try again!"}`);
    }
  };
  
  
  

  return (
    <>
      {loading && (
          <Loader />
      )}
      <div className=" h-screen grid grid-cols-5 w-full bg-green-800 relative">
        <div className="bg-yellow-500 col-span-2 rounded-br-full h-96 w-96 relative">
        </div>
        <div className="bg-green-800 col-span-2 "></div>
        <div className="bg-yellow-500 col-span-1 absolute bottom-0 right-0 h-64 w-96 rounded-tl-full overflow-hidden  "></div>
        <div
        
        className="bg-white absolute rounded-2xl overflow-hidden border-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
          <div className="login col-span-1 p-20">
            <h3 className="text-md font-mono text-center">Welcome</h3>
          <h2 className="text-3xl font-bold font-mono mb-8 text-center ">
            Log In
          </h2>
          <form onSubmit={handleLogin}>
            <div className=" ">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input
                className="w-full rounded-md px-3 py-2 mb-6 border border-yellow-600"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={inputChange}
              />
              <label htmlFor="password" className="font-semibold">Password</label>
              <input
                className="w-full rounded-md px-3 py-2 border border-yellow-600 "
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={inputChange}
              />
              <p className="text-sm text-blue-800">Forgot Password?</p>
              <button className="bg-green-800 text-white rounded-lg p-1 mt-4 w-full">
                Login
              </button>
              <div className="flex flex-row">
              <p className="text-sm text-blue-800 mt-2 ">Don't have a account?</p>
             <Link to="/register"><p className="text-md text-red-800 mt-1 ">SignUp</p></Link>
              </div>
            </div>
          </form>
          </div>
          <div className="col-span-1 bg-green-800 grid grid-cols-5 ">
              <div className="col-span-2 bg-green-600 rounded-br-full h-44">
              <div className="contain w-56 mt-28 "><img src={farmers} alt="farmer" className="" /></div>
              </div>
              <div className="col-span-1 "></div>
              <div className="col-span-2 bg-green-600 rounded-tl-full mt-60 text-white ">
                <div className="-mt-52 -ml-10 text-center">
                <h3 className="text-4xl font-extrabold ">FarMen</h3>
                <p className="text-lg font-semibold">(The Farmer's App)</p>
                <p className="text-lg font-semibold mt-8 -ml-10 mr-3 font-serif">Cultivating connectivity for modern farmers</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
