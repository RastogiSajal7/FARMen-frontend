import React, { useState, useEffect } from "react";
import man from "../assets/images/man.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Auth from "../HOC/Auth";

const Account = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState(null);

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("user"));
    setUserDetails(storedUserDetails);

    if (storedUserDetails && storedUserDetails.profileImg) {
      setProfileImgUrl(
        `https://farmen.onrender.com/${storedUserDetails.profileImg}`
      );
    }
  }, [localStorage.getItem("user")]);

  return (
    <>
      <div className="bg-green-200 h-screen relative">
        <Navbar />
        <div className="circles">
          <div className="circle1 h-8 w-8 bg-emerald-500 rounded-full absolute top-28 left-44"></div>
          <div className="circle1 h-32 w-32 bg-emerald-500 rounded-full absolute top-32 ml-16"></div>
          <div className="circle1 h-52 w-52 bg-emerald-500 rounded-full absolute top-40 ml-52"></div>
          <div className="circle1 h-72 w-72 bg-emerald-500 rounded -full absolute top-96 left-80"></div>
          <div className="circle1 h-32 w-32 bg-emerald-500 rounded-full absolute top-32 ml-16"></div>
          <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-80 right-96"></div>
          <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-96 left-28"></div>
          <div className="circle1 h-16 w-16 bg-emerald-500 rounded-full absolute top-96 right-48"></div>
          <div className="circle1 h-56 w-56 bg-emerald-500 rounded-full absolute top-32 right-8"></div>
          <div className="circle1 h-64 w-64 bg-emerald-500 rounded-full absolute top-96 right-72"></div>

          <div className="bg-white absolute rounded-t-full overflow-hidden border-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {userDetails && (
              <div className="grid grid-rows-8 bg-amber-50 ">
                <div className="row-span-3 flex justify-center items-center">
                  <div className="bg-emerald-500 h-44 w-full rounded-b-full relative flex justify-center items-center">
                    {profileImgUrl ? (
                      <div className="userImg bg-center bg-contain bg-no-repeat h-32 w-32 rounded-full border-4 border-amber-50 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-10">
                        <img
                          src={profileImgUrl}
                          alt="userImg"
                          onError={(e) => {
                            if (e.target.src !== man) {
                              e.target.src = man;
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="userImg bg-center bg-cover bg-no-repeat h-32 w-32 rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-10">
                        <img src={man} alt="userImg" />
                      </div>
                    )}
                  </div>
                </div>

                {/* User Details */}
                <div className="row-span-5 mt-8 p-8 font-serif text-slate-600 flex flex-col items-center ">
                  <div className="grid grid-rows-7 w-full">
                    {[
                      { label: "Name", value: `${userDetails.firstName} ${userDetails.lastName}` },
                      { label: "Username", value: userDetails.username },
                      { label: "Password", value: userDetails.password.replace(/./g, "*") },
                      { label: "Contact", value: userDetails.contact },
                      { label: "Email", value: userDetails.email },
                      { label: "Account Type", value: userDetails.accountType },
                      { label: "Farm/Business Name", value: userDetails.farmName },
                    ].map((item, index) => (
                      <div key={index} className="grid grid-cols-5 ">
                        <div className="col-span-2 flex flex-col justify-center">
                          <h3 className="font-black">{item.label}</h3>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center">
                          <h3>:</h3>
                        </div>
                        <div className="col-span-2 flex flex-col justify-center">
                          <h3>{item.value}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {userDetails && userDetails.accountType === "Farmer" && (
              <div className="text-center bg-amber-50 p-5 flex justify-center gap-4">
                <Link
                  to="/item"
                  className="bg-emerald-600 text-white p-2 rounded-md"
                >
                  Add Your Products
                </Link>
                <Link
                  to="/updateAccount"
                  className="bg-emerald-600 text-white p-2 rounded-md"
                >
                  Update account details
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth(Account);