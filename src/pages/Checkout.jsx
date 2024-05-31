import React, { useEffect, useState } from "react";
import spices from "../assets/images/cartItem.png";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, handleRemoveFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Update total price whenever cartItems change
    const price = cartItems.reduce((acc, item) => {
      const priceNumber = parseFloat(item.prodPrice.replace(/[^0-9.]/g, ""));
      return acc + priceNumber;
    }, 0);
    setTotalPrice(price);
  }, [cartItems]);

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_34LCBpsoQGVC2g', // Replace with your key
      amount: totalPrice * 100, // Amount is in the smallest currency unit
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
            cartItems: cartItems,
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
    <>
      <div className="checkout bg-amber-400 rounded-tl-3xl mt-5 ">
        <h1 className="text-center text-4xl font-semibold pt-10 text-emerald-800 mb-10 ">
          Checkout
        </h1>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="h-20 rounded-lg ml-2 mr-2 border-4 grid grid-cols-12 mb-4 ">
              <div className="col-span-3">
                <img className="h-16 p-2 ml-5 mt-1" src={spices} alt="prodImg" />
              </div>
              <div className="itemName col-span-3 mt-6 font-semibold">
                {item.prodName}
              </div>
              <div className="itemPrice col-span-2 mt-6 font-semibold">
                ₹ {item.prodPrice}
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded-2xl w-28 mt-4 mb-6 ml-6 "
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <>
          <p className="text-center text-2xl font-semibold text-gray-500 mt-20">
            !Your cart is empty!
          </p>
          <p className="text-center text-2xl font-semibold text-red-500">
            Try adding some plumpy tomatoes
          </p>
          <div className="total flex bg-amber-400 -mt-4 pt-5 pb-5 justify-end pr-5 ">
          <p className="mt-2 text-2xl font-semibold">Total : </p>
          <div className="border-2 border-amber-500 p-2 mt-1 ml-16 h-10 bg-white w-32 rounded-2xl text-black text-center font-bold text-lg">
            ₹ {totalPrice} /-
          </div>
        </div>
        </>
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total flex bg-amber-400 -mt-4 pt-5 pb-5 justify-end pr-5">
            <p className="mt-2 text-2xl font-semibold">Total : </p>
            <div className="border-2 border-amber-500 p-2 mt-1 ml-16 h-10 bg-white w-32 rounded-2xl text-black text-center font-bold text-lg">
              ₹ {totalPrice} /-
            </div>
          </div>
          <div className="flex payment justify-center bg-amber-400 text-white text-2xl -mt-4 mb-60 pt-4 pr-5 rounded-b-3xl pb-5 font-semibold gap-3">
            <button 
              className="bg-emerald-800 font-thin w-96 p-1 rounded-md"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
