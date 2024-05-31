import React from "react";
import { motion } from "framer-motion";
import agrisell from "./../assets/images/agrisell.png";
import agribuy from "./../assets/images/agribuy.png";
import anybuy from "./../assets/images/anybuy.png";
import farmer from "./../assets/images/farmer.png";
function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
      <div className="text-center">
        <h3 className="mx-auto max-w-md">
          Now get fresh and organic groceries at your home without paying extra.
          Buy and sell your Agri produce online (Buyers to Farmers) – Sell your
          produce directly to buyers without middlemen and make more money from
          your farm produce.
        </h3>
        <motion.button 
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.7}}
        className="btn btn-lg mt-4 bg-emerald-900 p-1 text-white rounded-lg">
          Start selling
        </motion.button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={agrisell}
              className="h-40 mx-auto"
              alt="Sell Agri Produce"
            />
            <motion.button 
            whileHover={{scale: 1.1}} 
            whileTap={{scale: 0.7}}
            href="#" className="bg-green-900 p-1 text-white rounded-lg">
              SELL AGRI PRODUCE
            </motion.button>
            <p className="">
              Sell your agriculture products without any mediator
            </p>
          </div>
          <div className="text-center">
            <motion.img
              whileHover={{scale: 1.2}}
              src={agribuy}
              className="h-36 mx-auto"
              alt="Buy Agri Produce"
            />
            <motion.button 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.7}}
            href="#" className="bg-emerald-900 p-1 text-white rounded-lg mt-5">
              BUY AGRI PRODUCE
            </motion.button>
            <p className="">
              Now Farmers can sell their produce directly to end consumers there
              are no more mediator.
            </p>
          </div>
          <div className="text-center">
            <motion.img 
              whileHover={{scale: 1.2}}
            src={anybuy} className="h-40 mx-auto" alt="Anywhere Anytime" />
            <motion.button 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.7}}
            href="#" className="bg-emerald-900 p-1 text-white rounded-lg">
              ANYWHERE ANYTIME
            </motion.button>
            <p className="">
              India's no 1 Marketplace for farmers can buy and sell their
              agriculture produce.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <motion.img
          whileHover={{scale: 0.4}}
          src={farmer}
          className="h-auto w-full md:h-96 md:w-auto mx-auto rounded-lg"
          alt="Farmer"
        />
      </div>
    </div>
  );
}

export default HomePage;
