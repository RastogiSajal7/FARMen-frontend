import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import productbg from "../assets/images/productbg.jpg";
import Navbar from "../components/Navbar";
import Auth from '../HOC/Auth';
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const ListItem = () => {
  const [loading, setLoading] = useState(false);
  const [prodName, setProdName] = useState("");
  const [prodDetails, setProdDetails] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodImg, setProdImg] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
    setUserId(storedUser.id);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'prodName') {
      setProdName(value);
    } else if (name === 'prodDetails') {
      setProdDetails(value);
    } else if (name === 'prodPrice') {
      setProdPrice(value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProdImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!prodName || !prodDetails || !prodPrice || !prodImg) {
      toast.warning("Please fill out all fields");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("prodName", prodName);
    formData.append("prodDetails", prodDetails);
    formData.append("prodPrice", prodPrice);
    formData.append("prodImg", prodImg);

    try {
      const response = await axios.post("https://farmen.onrender.com/addProduct", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Product added successfully:", response.data);

      setProdName("");
      setProdDetails("");
      setProdPrice("");
      setProdImg(null);

      setLoading(false);
      toast.info("Item added successfully!");
      toast("Add more items!");
    } catch (error) {
      console.error("Error submitting Product:", error);
      setLoading(false);
    }
  };

  return (
    <>
    {loading && (<Loader/>)}
      <Navbar />
      <div className="outer bg-cover h-screen" style={{ backgroundImage: `url(${productbg})` }}>
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="bg-cover bg-center max-w-md mx-auto mt-10 p-8 rounded-lg shadow-2xl"
        >
          <h2 className="text-3xl font-mono mb-8 text-center">List your products here</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prodName" className="text-sm font-medium text-orange-950">Product Name</label>
                <input
                  type="text"
                  id="prodName"
                  name="prodName"
                  value={prodName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent shadow-orange-950 shadow-2xl rounded-md px-3 py-2 placeholder-orange-950"
                  required
                />
              </div>
              <div>
                <label htmlFor="prodDetails" className="text-sm font-medium text-orange-950">Product Description</label>
                <input
                  type="text"
                  id="prodDetails"
                  name="prodDetails"
                  value={prodDetails}
                  onChange={handleInputChange}
                  className="w-full bg-transparent shadow-orange-950 shadow-2xl rounded-md px-3 py-2 placeholder-orange-950"
                  required
                />
              </div>
              <div>
                <label htmlFor="prodPrice" className="text-sm font-medium text-orange-950">Price(₹)</label>
                <input
                  type="text"
                  id="prodPrice"
                  name="prodPrice"
                  value={prodPrice}
                  onChange={handleInputChange}
                  className="w-full bg-transparent shadow-orange-950 shadow-2xl rounded-md px-3 py-2 placeholder-orange-950"
                  required
                />
              </div>
            </div>
            <label htmlFor="prodImg" className="text-sm font-medium text-orange-950">Upload Image</label>
            <input
              id="prodImg"
              type="file"
              name="prodImg"
              onChange={handleFileChange}
              className="w-full bg-transparent shadow-orange-950 shadow-2xl rounded-md py-2 placeholder-orange-950 h-28"
              required
            />
            <button type="submit" className="bg-green-600 text-white w-full mt-4 rounded-md p-1 font-serif">Submit</button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Auth(ListItem);
