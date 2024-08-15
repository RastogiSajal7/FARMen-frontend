import React, { useEffect, useState, useRef } from 'react';
import tea from '../assets/images/farmImg.jpg';
import axios from 'axios';
import { motion } from 'framer-motion';

const Farms = ({ onFarmClick }) => {
    const [farms, setFarms] = useState([]);

    useEffect(() => {
        const getFarms = async () => {
            try {
                const response = await axios.get("https://farmen.onrender.com/getFarms");
                setFarms(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error getting Farms: ", error);
            }
        };
        getFarms();
    }, []);

    const [showGetFarm, setShowGetFarm] = useState(false);
    const getFarmRef = useRef(null); 

    return (
        <div className='p-5 md:p-10 lg:p-20'>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {farms.map((farm) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        key={farm._id} 
                        className='h-auto w-full rounded-3xl shadow-md bg-white'
                        onClick={() => onFarmClick(farm)}
                    >
                        <div 
                            className="h-40 bg-cover bg-center rounded-t-3xl" 
                            style={{ backgroundImage: `url(${tea})` }}
                        >
                        </div>
                        <div className="p-4">
                            <p className='text-center font-extrabold text-green-900 text-lg'>{farm.farmName || "Farm Not set Up"}</p>
                            <p className='text-slate-500 text-center text-sm'>{farm.farmDesc || "farm desc. missing"}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Farms;
