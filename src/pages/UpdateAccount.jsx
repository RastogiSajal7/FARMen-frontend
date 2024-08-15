import React, { useEffect, useState } from 'react';
import farmers from "../assets/images/farmercoatbg.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Auth from '../HOC/Auth';

const UpdateAccount = () => {
    const [farmName, setFarmName] = useState('');
    const [profileImg, setProfileImg] = useState(null);
    const [userId, setUserId] = useState('');
    const [farmDesc, setFarmDesc] = useState('');
    const navigate = useNavigate();

    const updatedData = () => {
     alert('Data Updated Successfully! ');
     navigate('/account');
    }

    useEffect(()=>{
      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log(storedUser);
      if (storedUser) {
        setUserId(storedUser.id);
    }

    }, []);
    console.log(userId);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'farmName') {
          setFarmName(value);
        }
        if (name === 'farmDesc') {
          setFarmDesc(value);
        }
      };
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProfileImg(file);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!farmName || !profileImg || !farmDesc){
            alert("Please fill out all fields");
            return;
        }
    
        const formData = new FormData();
        formData.append('farmName', farmName);
        formData.append('profileImg', profileImg);
        formData.append('userId', userId);
        formData.append('farmDesc', farmDesc);
    
        try {
          const response = await axios.post('https://farmen.onrender.com/update', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          console.log(response.data); // Log the response from the backend
          updatedData();
        } catch (error) {
          console.error('Error updating account:', error);
        }
      };

  return (
    <>
    <div className=" h-screen grid grid-cols-5 w-full bg-green-800 relative">
    <div className="bg-yellow-500 col-span-2 rounded-br-full h-96 w-96 relative">
    </div>
    <div className="bg-green-800 col-span-2 "></div>
    <div className="bg-yellow-500 col-span-1 absolute bottom-0 right-0 h-64 w-96 rounded-tl-full overflow-hidden  "></div>
    <div
    
    className="bg-white absolute rounded-2xl overflow-hidden border-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
      <div className="login col-span-1 p-20">
        <h3 className="text-md font-mono text-center">Welcome</h3>
      <h2 className="text-3xl font-bold font-mono mb-8 text-center ">
        Fill details to continue..
      </h2>
      <form onSubmit={handleSubmit} >
        <div className=" ">
          <label htmlFor="farmName" className="font-semibold">Farm/Business Name </label>
          <input
            id="farmName"
            className="w-full rounded-md px-3 py-2 mb-6 border border-yellow-600"
            type="text"
            placeholder="Farm/Business Name"
            name="farmName"
            value={farmName}
            onChange={handleInputChange}
          />
          <div className=" grid grid-cols-2 gap-2 ">
          <div className="span-cols-1">
              <label htmlFor="farmDesc" className="font-semibold">Farm Description</label>
              <input 
                id="farmDesc"
                className='w-full rounded-md px-3 py-2 border border-yellow-600 h-28' 
                type="text" 
                placeholder='Give a brief description about your business. e.g. Farm Products with comma separation '
                name="farmDesc"
                value={farmDesc}
                onChange={handleInputChange}
              />
          </div>
          <div className="span-cols-1">
              <label htmlFor="profileImg" className="font-semibold">Profile Image</label>
              <input
                id="profileImg"
                className="w-full rounded-md px-3 py-2 border border-yellow-600"
                type="file"
                placeholder="Upload your profile photo"
                name="profileImg"
                onChange={handleFileChange}
              />
          </div>
          </div>

          <button className="bg-green-800 text-white rounded-lg p-1 mt-4 w-full" type='submit'>
            Submit
          </button>
        </div>
      </form>
      </div>
      <div className="col-span-1 bg-green-800 grid grid-cols-5 ">
          <div className="col-span-2 bg-green-600 rounded-br-full h-44">
          <div className="contain w-56 mt-28 "><img src={farmers} alt="farmer" className="" /></div>
          </div>
          <div className="col-span-1 "></div>
          <div className="col-span-2 bg-green-600 rounded-tl-full mt-60 text-white ">
            <div className="-mt-52 -ml-10 text-center">
            <h3 className="text-4xl font-extrabold ">FarMen</h3>
            <p className="text-lg font-semibold">(The Farmer's App)</p>
            <p className="text-lg font-semibold mt-8 -ml-10 mr-3 font-serif">Cultivating connectivity for modern farmers</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</>
  )
}

export default UpdateAccount;
