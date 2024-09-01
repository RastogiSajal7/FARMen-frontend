import React from 'react';
import { motion } from 'framer-motion';
import tractor from '../assets/images/tractor.png';
import grass from '../assets/images/grass.png';

const Loader = () => {
  const grassArray = Array(4).fill(grass);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-sky-100 bg-opacity-75 z-50">
      <motion.div
        animate={{ x: [-580, 600] }} 
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
        className="relative"
      >
        <img className='h-20 mb-16' src={tractor} alt="Tractor" />
      </motion.div>
      
      <div className="absolute flex">
        {grassArray.map((src, index) => (
          <img 
            key={index} 
            className='h-20' 
            src={src} 
            alt='grass'
          />
        ))}
      </div>

      <motion.p
        className='mt-28 -ml-16 text-black font-bold text-2xl'
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        . . . loading
      </motion.p>
    </div>
  );
};

export default Loader;
