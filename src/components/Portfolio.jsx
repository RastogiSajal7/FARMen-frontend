import React from "react";
import farmers from "../assets/images/farmercoatbg.png";
import Selectors from "../components/Selectors";
import { motion } from "framer-motion";
import agrisell from "../assets/images/agrisell.png";
import Carousel from "../components/Carousel";

const Portfolio = () => {
  return (
    <div className="bg-white pt-4 pb-4 px-4 overflow-y-scroll h-screen">
      <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl ml-10 md:ml-16 bg-gradient-to-r from-gray-900 to-emerald-500 bg-clip-text text-transparent">
        FARMen
      </h1>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl ml-10 md:ml-16 lg:ml-32 bg-gradient-to-r from-emerald-500 to-gray-900 bg-clip-text text-transparent">
        The Farmer's App
      </h1>
      <div className="flex flex-col lg:flex-row text-center mt-8 lg:mt-12">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={farmers}
          className="h-64 md:h-72 lg:h-96 mx-auto lg:mx-0"
          alt="farmerImg"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-slate-400 mt-4 lg:mt-20 pt-4 lg:pt-8">
            Cultivating connectivity for modern farmers.
          </h1>
        </div>

        <motion.img
          whileHover={{ scale: 1.1 }}
          src={agrisell}
          className="h-64 md:h-72 lg:h-96 mx-auto lg:mx-0 mt-10"
          alt="AgriShop"
        />
      </div>

      <div className="bg-slate-300 h-2 w-full mt-8"></div>
      <Carousel />
      <div className="bg-slate-300 h-2 w-full mt-8"></div>

      <div className=" mt-8">
        <Selectors />
      </div>
    </div>
  );
};

export default Portfolio;
