import React, { useState, useEffect } from "react";
import man from "../assets/images/man.png";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import Navbar from "../components/Navbar";
import Auth from "../HOC/Auth";

const Account = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState(null);

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("user"));
    setUserDetails(storedUserDetails);

    if (storedUserDetails && storedUserDetails.profileImg) {
      setProfileImgUrl(`https://farmen.onrender.com/${storedUserDetails.profileImg}`);
    }
  }, []);

  return (
    <>
    <div className="bg-green-200 h-screen relative">
    <Navbar/>
      <div className="circles">
        <div className="circle1 h-8 w-8 bg-emerald-500 rounded-full absolute top-28 left-44"></div>
        <div className="circle1 h-32 w-32 bg-emerald-500 rounded-full absolute top-32 ml-16"></div>
        <div className="circle1 h-52 w-52 bg-emerald-500 rounded-full absolute top-40 ml-52"></div>
        <div className="circle1 h-72 w-72 bg-emerald-500 rounded-full absolute top-96 left-80"></div>
        <div className="circle1 h-32 w-32 bg-emerald-500 rounded-full absolute top-32 ml-16"></div>
        <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-80 right-96"></div>
        <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-96 left-28"></div>
        <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-96 right-48"></div>
        <div className="circle1 h-56 w-56 bg-emerald-500 rounded-full absolute top-32 right-8"></div>
        <div className="circle1 h-64 w-64 bg-emerald-500 rounded-full absolute top-96 right-72"></div>

        <div className="bg-white  absolute rounded-t-full overflow-hidden border-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {userDetails && (
            <div className="grid grid-rows-8 bg-amber-50 ">
              <div className="row-span-3">
              <div className="bg-emerald-500 h-44 w-full rounded-b-full relative">
                    {profileImgUrl ? (
                      <div
                        className="userImg bg-center bg-contain bg-no-repeat h-32 w-32 rounded-full border-4 border-amber-50 absolute bottom-0 left-1/3 overflow-hidden -mb-10"
                        
                      >
                        <img src={profileImgUrl} alt="userImg" />
                      </div>
                    ) : (
                      <div
                        className="userImg bg-center bg-cover bg-no-repeat h-32 w-32 rounded-full border-4 border-white absolute bottom-0 left-1/3 overflow-hidden -mb-10"
                      >
                        <img src={man} alt="userImg" />
                      </div>
                    )}
                  </div>
                </div>
              <div className="row-span-5 mt-8 p-8 font-serif text-slate-600 ml-10 h-44 ">
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Name : </h3>
                  <h3 className=""> {userDetails.firstName} {userDetails.lastName}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Username : </h3>
                  <h3 className=""> {userDetails.username}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Password : </h3>
                  <h3 className=""> {userDetails.password.replace(/./g, '*' )}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Contact : </h3>
                  <h3 className=""> {userDetails.contact}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Email : </h3>
                  <h3 className=""> {userDetails.email}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Account Type : </h3>
                  <h3 className=""> {userDetails.accountType}</h3>
                </div>
                <div className="bg-transparent flex flex-row text-lg gap-4">
                  <h3 className="font-black">Farm/Business Name : </h3>
                  <h3 className=""> {userDetails.farmName}</h3>
                </div>
              </div>
            </div>
          )}
          {userDetails && userDetails.accountType === "Farmer" && (
          <div className="text-center bg-amber-50 pb-5 flex justify-around">
            <Link to="/item" className="text-emerald-900">
              Add Your Products <GrLinkNext />
            </Link>
            <Link to='/updateAccount' className="text-emerald-900">Update account details <GrLinkNext/></Link>
          </div>
        )}
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Account;
