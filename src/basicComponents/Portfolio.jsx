import React from "react";
import farmers from "../assets/images/farmercoatbg.png";
import Selectors from "../components/Selectors";
import { motion } from "framer-motion";
import agrisell from "../assets/images/agrisell.png";
import Carousel from "../components/Carousel";

const Portfolio = () => {
  return (
    <>
      <div className="col-span-7 bg-white pt-4 pb-4 pl-4 overflow-y-scroll">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="font-extrabold text-7xl ml-16 bg-gradient-to-r from-gray-900 to-emerald-500 bg-clip-text text-transparent">
              FARMen
            </h1>
            <div>
              <h1 className="font-bold text-6xl ml-32 bg-gradient-to-r from-emerald-500 to-gray-900 bg-clip-text text-transparent h-16 w-full">
                The Farmer's App
              </h1>
            </div>

            <div className="flex gap-12 text-pretty text-center ml-20">
              <img src={farmers} className="h-96 -mt-10" alt="farmers" />
              <div>
                <h1 className="font-bold text-4xl text-slate-400 mt-20 pt-8">
                  Cultivating connectivity for modern farmers.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-40">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={agrisell}
              className="rounded-lg"
              alt="AgriShop"
            />
          </div>
        </div>
        <div className="bg-slate-300 h-2 w-full"></div>
        <Carousel />
        <div className="bg-slate-300 h-2 w-full"></div>

        <div className="flex justify-evenly">
          <Selectors />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
