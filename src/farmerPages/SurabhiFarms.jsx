import React from 'react';
import cashews from '../assets/images/cashews.jpg';

const SurabhiFarms = () => {
  return (
    <div className='raghuram farms h-56 w-64 grid grid-rows-7 rounded-3xl shadow-md'>
        <div className="image row-span-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${cashews})` }}>
        </div>
        <div className="row-span-3">
            <p className='text-center font-extrabold text-green-900'>Surabhi Farms</p>
            <p className='text-slate-500 p-2 text-center'>Tea, Coffee, Cashews and Nuts </p>
        </div>
    </div>
  )
}

export default SurabhiFarms;