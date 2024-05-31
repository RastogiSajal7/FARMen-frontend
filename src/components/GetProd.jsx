import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Checkout from "../pages/Checkout";

const GetProd = () => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getProduct");
        setProduct(response.data);
      } catch (error) {
        console.error("Error getting products:", error);
      }
    };
    getProduct();
  }, []);

  const handleAddToCart = (clickedProduct) => {
    setCartItems([...cartItems, clickedProduct]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  const handleBuyNow = (item) => {
    const totalPrice = parseFloat(item.prodPrice.replace(/[^0-9.]/g, ""));
    const options = {
      key: 'rzp_test_34LCBpsoQGVC2g', // Replace with your key
      amount: totalPrice * 100, // Amount is in smallest currency unit
      currency: "INR",
      name: "FARMen (The Farmer's app)",
      description: "Cultivating connectivity for modern farmers",
      image: "https://i.pinimg.com/736x/5e/6c/68/5e6c68dff0f627dfe49eaee9a03e1adc.jpg",
      handler: function (response) {
        const payment_id = response.razorpay_payment_id;
        navigate("/orders", {
          state: {
            payment_id: payment_id,
            totalPrice: totalPrice,
            cartItems: [item],
          }
        });
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "note value"
      },
      theme: {
        color: "#ABF019"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="grid grid-cols-6 ">
      <div className="col-span-4">
        <div className="flex flex-row flex-wrap p-4 gap-6 justify-around mt-8">
          {product.map((getProduct) => (
            <div
              key={getProduct._id}
              className="rounded-md bg-white border-solid shadow-md h-auto w-64 p-2"
            >
              <div className="grid grid-rows-12 h-96 relative ">
                <div className="row-span-6 bg-contain bg-no-repeat bg-center relative ">
                  <img className="h-40 w-60" src={`http://localhost:5000/${getProduct.prodImg}`} alt={getProduct.prodName} />
                  <p className="bg-green-200 absolute top-0 left-0 p-2 -m-4 border-t-4 border-green-400 rounded-e-3xl font-semibold italic text-orange-950 ">
                    -10%
                  </p>
                  <p className="bg-red-400 absolute top-0 -right-4 p-2 -mt-4 text-white rounded-l-md">FARMen</p>
                </div>
                <div className="row-span-4 -mt-5">
                  <div className="name font-bold text-center ">
                    {getProduct.prodName}
                  </div>
                  <div className="description text-slate-600 text-center ">
                    {getProduct.prodDetails}
                  </div>
                </div>
                <div className="row-span-2 -mt-1">
                  <div className="grid-rows-2">
                    <div className="row-span-1 flex justify-around">
                      <div className="text-slate-400 line-through ">₹ 100</div>
                      <div className="font-bold">
                        ₹ {getProduct.prodPrice}
                      </div>
                    </div>
                    <div className="row-span-1 flex justify-around">
                      <button
                        className="buy bg-yellow-500 text-md p-1 rounded-sm text-white flex gap-1"
                        onClick={() => handleBuyNow(getProduct)}
                      >
                        <IoBagCheck className="text-white mt-1" /> Buy Now
                      </button>
                      <button
                        className="cart bg-green-500 text-white text-md p-1 rounded-sm flex gap-1"
                        onClick={() => handleAddToCart(getProduct)}
                      >
                        <FaCartArrowDown className="text-white mt-1" /> Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <Checkout cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default GetProd;
