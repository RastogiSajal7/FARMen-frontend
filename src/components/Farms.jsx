import React, { useEffect, useState, useRef } from 'react';
import tea from '../assets/images/farmImg.jpg';
import axios from 'axios';
import { motion } from 'framer-motion';

const Farms = ({ onFarmClick }) => {
    const [farms, setFarms] = useState([]);

    useEffect(() => {
        const getFarms = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getFarms");
                setFarms(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error getting Farms: ", error);
            }
        };
        getFarms();
    }, []);

    const [showGetFarm, setShowGetFarm] = useState(false);
    const getFarmRef = useRef(null); 
   

    return (
        <div className='grid grid-cols-4 m-10 mb-10 gap-3'>
            {farms.map((farm) => (
                <motion.div  whileHover={{ scale: 1.1 }} key={farm._id} className=' h-56 w-64 grid grid-rows-7 rounded-3xl shadow-md' onClick={() => onFarmClick(farm)}>
                    <div className="image row-span-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${tea})` }}>
                    </div>
                    <div className="row-span-3">
                        <p className='text-center font-extrabold text-green-900'>{farm.farmName}</p>
                        <p className='text-slate-500 p-2 text-center'>{farm.farmDesc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Farms;
