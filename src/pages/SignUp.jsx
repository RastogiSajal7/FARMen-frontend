import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import farmers from "../assets/images/farmercoatbg.png";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");

  const registerClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://farmen-backend.onrender.com/api/register", {
        firstName,
        lastName,
        username,
        contact,
        password,
        email,
        accountType,
      });

      if (response.status === 200) {
        alert("Registered successfully");
        navigate("/login");
      } else {
        console.error("Registration failed:", response.data);
        alert("Could not register. Please try again!");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred. Please try again!");
    }
  };

  return (
    <div className="h-screen grid grid-cols-5 w-full bg-green-800 relative">
      <div className="bg-yellow-500 col-span-2 rounded-br-full h-96 w-96 relative"></div>
      <div className="bg-green-800 col-span-2"></div>
      <div className="bg-yellow-500 col-span-1 absolute bottom-0 right-0 h-64 w-96 rounded-tl-full overflow-hidden"></div>
      <div className="bg-white absolute rounded-2xl overflow-hidden border-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
        <div className="signUp col-span-1 p-8">
          <h3 className="text-md font-mono text-center">Welcome</h3>
          <h2 className="text-3xl font-bold font-mono mb-8 text-center">Sign Up</h2>
          <form onSubmit={registerClick}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-orange-950">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-orange-950">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-orange-950">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-orange-950">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-orange-950">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-orange-950">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full rounded-md px-3 py-2 border border-yellow-600"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="accountType" className="block text-sm font-medium text-orange-950">
                Account Type
              </label>
              <select
                id="accountType"
                name="accountType"
                onChange={(e) => setAccountType(e.target.value)}
                className="w-full rounded-md px-3 py-2 border border-yellow-600"
                required
              >
                <option value="">Select Account Type</option>
                <option value="Admin">Admin</option>
                <option value="Farmer">Farmer</option>
                <option value="User">Buyer</option>
              </select>
            </div>
            <div className="signUp">
              <button className="bg-green-800 text-white rounded-lg p-1 mt-4 w-full" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex -mr-3">
            <p className="text-sm text-blue-800 mt-2">Already have an account?</p>
            <Link to="/login">
              <p className="text-md text-red-800 mt-1">Log In</p>
            </Link>
          </div>
        </div>
        <div className="col-span-1 bg-green-800 grid grid-cols-5">
          <div className="col-span-2 bg-green-600 rounded-br-full h-44">
            <div className="contain w-56 mt-28">
              <img src={farmers} alt="farmer" className="" />
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2 bg-green-600 rounded-tl-full mt-60 text-white">
            <div className="-mt-52 -ml-10 text-center">
              <h3 className="text-4xl font-extrabold">FarMen</h3>
              <p className="text-lg font-semibold">(The Farmer's App)</p>
              <p className="text-lg font-semibold mt-8 -ml-10 mr-3 font-serif">
                Cultivating connectivity for modern farmers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
