import React from 'react';
import { motion } from 'framer-motion';
import tractor from '../assets/images/tractor.png';
import grass from '../assets/images/grass.png';

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-sky-100 bg-opacity-75 z-50">
    <motion.div
      animate={{ x: [-110, 150] }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    >
      <img className='h-20 mb-16' src={tractor} alt="Tractor" />
    </motion.div>
    <img className='absolute h-16' src={grass} alt='grass'/>
    <motion.p
      className='mt-20 -ml-16 text-black font-bold text-xl'
      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      . . . loading
    </motion.p>
  </div>
);

export default Loader;
