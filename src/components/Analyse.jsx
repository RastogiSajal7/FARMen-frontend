import React from 'react'

const Analyse = () => {
  return (
    <div className='p-10'>
        <p className='text-green-800 text-3xl'>Product List</p>
        <div className='grid grid-cols-8'>
            <div className='col-span-1 border border-gray-950'>Image</div>
            <div className='col-span-2 border border-gray-950'>Product</div>
            <div className='col-span-1 border border-gray-950'>Remaining Stock</div>
            <div className='col-span-1 border border-gray-950'>Sold</div>
        </div>
    </div>
  )
}

export default Analyse