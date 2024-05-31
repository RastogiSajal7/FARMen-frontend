import React from 'react';
import tea from '../assets/images/wheat.jpg';

const RaghuramFarms = () => {
  return (
    <div className='raghuram farms h-56 w-64 grid grid-rows-7 rounded-3xl shadow-md'>
        <div className="image row-span-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${tea})` }}>
        </div>
        <div className="row-span-3">
            <p className='text-center font-extrabold text-green-900'>Raghuram Farms</p>
            <p className='text-slate-500 p-2 text-center'>Wheat, Barley, Apples, Manure </p>
        </div>
    </div>
  )
}

export default RaghuramFarms;