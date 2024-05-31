import React from "react";
import { motion } from "framer-motion";
import tractor from "../assets/images/tractor.png";
import farmerscheme from "../assets/images/farmerscheme.png";
import farmtech from "../assets/images/farmtech.png";
import updates from "../assets/images/updates.jpg";
import advertise from "../assets/images/advertise.png";
import { Link } from "react-router-dom";

const Selectors = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <Link to="/farmerBuy">
        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={tractor} className="h-48 min-w-52" alt="Tractor" />
          </div>
          <div className="bg-sky-400 flex items-center justify-center w-full">
            <a className="text-white p-1 ">Buy farming equipments!</a>
          </div>
        </motion.div>
        </Link>

        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={farmerscheme} className="h-48 min-w-52" alt="Farmer Scheme" />
          </div>
          <div className="bg-amber-400 flex items-center justify-center w-full">
            <a className="text-white p-2">View latest Govt. Schemes</a>
          </div>
        </motion.div>

        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={farmtech} className="h-48 min-w-52" alt="Farm Tech" />
          </div>
          <div className="bg-purple-500 flex items-center justify-center w-full">
            <a className="text-white p-2">Know better farming techniques</a>
          </div>
        </motion.div>

        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={updates} className="h-48 min-w-52" alt="Updates" />
          </div>
          <div className="bg-emerald-600 flex items-center justify-center w-full">
            <a className="text-white p-2">Latest agriculture news and updates</a>
          </div>
        </motion.div>
        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={advertise} className="h-48 min-w-52 p-4" alt="Tractor" />
          </div>
          <div className="bg-pink-500 flex items-center justify-center w-full">
            <a className="text-white p-2">Advertise your products</a>
          </div>
        </motion.div>
        <motion.div
          className="flex h-48 w-80 rounded-2xl m-4 shadow-md overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <div className="">
            <img src={tractor} className="h-48 min-w-52" alt="Tractor" />
          </div>
          <div className="bg-blue-500 flex items-center justify-center w-full">
            <a className="text-white p-2">Share agriculture news and updates</a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Selectors;
