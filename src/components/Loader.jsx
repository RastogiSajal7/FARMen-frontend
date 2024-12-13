import React from 'react';
import { motion } from 'framer-motion';
import wheel from '../assets/images/wheel.png';

const Loader = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
      <motion.div
        className="h-20 w-20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <img src={wheel} alt='wheel' />
      </motion.div>
    </div>
  );
};

export default Loader;
