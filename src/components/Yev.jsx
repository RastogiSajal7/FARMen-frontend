import React from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { ImLeaf } from "react-icons/im";
import { GiButterfly, GiBoxUnpacking } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";

const Yev = () => {
  return (
    <>
      <div className="relative bg-white pt-5 pl-8 pr-5 overflow-scroll overflow-x-hidden h-screen">
        <h3 className="font-bold text-2xl">Hello Fellow Farmers</h3>
        <p className="text-md font-serif">Manage your business with FARMen</p>
        <div className="boxes relative h-[30vh] w-full flex items-center">
          <div className=" w-7/12 h-[20vh] absolute z-10 rounded-3xl left-0 top-0 p-2 bg-emerald-900 mt-4 border-2 text-center">
            <div className="text-white">
              <p className="font-bold">Farmers Joined</p>
              <h3 className="font-bold">3000+</h3>
              <h3 className="font-semibold ">and counting</h3>
              <h3 className="font-semibold text-sm">...</h3>
            </div>
          </div>
          <Link
            to="/register"
            className=" w-6/12 absolute rounded-2xl translate-z-10 -skew-y-12 origin-right  right-0 top-0 h-[20vh] p-4 bg-amber-400 border-2 border-white"
          >
            <CiLogin className="text-white ml-10 text-2xl" />
            <p className=" text-md text-white font-extrabold mt-6 ml-10">
              Sign Up Today
            </p>
          </Link>
        </div>

        <div className="dribble rounded-2xl mb-2 p-1">
          <h3 className="text-emerald-500 text-2xl font-mono font-bold text-center mb-4">
            !OUR BEST SERVICE!
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-14 p-1 text-center font-bold text-slate-600">
            <div className="col-span-1 text-md">
              <div className="outer text-lime-400 bg-lime-200 p-2 sm:p-4 rounded-full mx-auto w-max">
                <ImLeaf className="border-lime-500 border-2 rounded-full p-2 sm:p-3 text-4xl sm:text-5xl" />
              </div>
              <p>Always Fresh</p>
            </div>
            <div className="col-span-1 text-md">
              <div className="outer text-amber-400 bg-amber-200 p-2 sm:p-4 rounded-full mx-auto w-max">
                <GiButterfly className="border-amber-500 border-2 rounded-full p-2 sm:p-3 text-4xl sm:text-5xl" />
              </div>
              <p>Pesticides Free</p>
            </div>
            <div className="col-span-1 text-md">
              <div className="outer text-lime-400 bg-lime-200 p-2 sm:p-4 rounded-full mx-auto w-max">
                <GiBoxUnpacking className="border-lime-500 border-2 rounded-full p-2 sm:p-3 text-4xl sm:text-5xl" />
              </div>
              <p>Eco Friendly</p>
            </div>
            <div className="col-span-1 text-md">
              <div className="outer text-amber-400 bg-amber-200 p-2 sm:p-4 rounded-full mx-auto w-max">
                <SlBadge className="border-amber-500 border-2 rounded-full p-2 sm:p-3 text-4xl sm:text-5xl" />
              </div>
              <p>Certified</p>
            </div>
          </div>
        </div>

        {/* Bar graph for representing weekly growth */}

        <div className=" ml-4 mr-6 p-4 w-full h-56 border-l-4 border-emerald-800 border-b-4 items-end flex  justify-around text-center text-white  ">
          <div className="Monday w-8 h-28 bg-amber-400 ">Mon</div>
          <div className="Tuesay w-8 h-32 bg-amber-400">Tue</div>
          <div className="Wednesday w-8 h-44 bg-amber-400">Wed</div>
          <div className="Thursday w-8 h-20 bg-amber-400">Thu</div>
          <div className="Friday w-8 h-32 bg-amber-400">Fri</div>
          <div className="Sunday w-8 h-40 bg-amber-400">Sat</div>
        </div>

        <div className=" p-4 mb-2 flex justify-center">
          <div className="bg h-40 w-40 border-8 border-r-white border-emerald-500 rounded-full text-center ">
            <div className="percent mt-12 font-bold text-md text-slate-400 ">
              {" "}
              78% happy customers
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 mb-1">
          <div className="col-span-2 bg-white rounded-2xl h-20 p-3">
            <h3 className="text-base font-semibold">Farming made easy</h3>
            <p className="text-xs">For Farmers</p>
          </div>
          <div className="col-span-2 bg-white rounded-2xl h-20 p-3">
            <h3 className="text-base font-semibold">Modern Farmers</h3>
            <p className="text-xs">Connect</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yev;
