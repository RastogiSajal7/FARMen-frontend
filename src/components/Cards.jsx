import React, { useState } from "react";
import { Link } from "react-router-dom";
import waterPump from "../assets/agriEquip/waterPump.jpg";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";

const Cards = () => {

  const [counter, setCounter] = useState(0);

  // function to increment counter
  const increment = ()=>{
    setCounter(counter +1);
  }
  // function to decrement counter
  const decrement = ()=>{
    setCounter(counter -1);
  }
  
  const numCards = 42; // Number of cards you want to render

  // Function to generate an array of numbers from 1 to numCards
  const generateCardIds = () => {
    return Array.from({ length: numCards }, (_, index) => index + 1);
  };

  return (
    <div className="card flex flex-row flex-wrap p-4 gap-6 justify-around">
      {/* Loop through the array of card ids and render a card for each id */}
      {generateCardIds().map((cardId) => (
        <div
          key={cardId}
          id={`card-${cardId}`}
          className=" rounded-md bg-white border-solid shadow-md h-auto w-64 p-2 "
        >
          <div className="grid grid-rows-12">
            <div
              className="row-span-7 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${waterPump})` }}
            >
              <p className="bg-green-200 inline p-2 -m-4 border-t-4 border-green-400 rounded-e-3xl font-semibold italic text-orange-950 ">
                -44%
              </p>
            </div>
            <div className="row-span-3">
              <div className="font-bold text-center ">Neptune Water Pump</div>
              <div className="description text-slate-600 text-center">
                Neptune Simplify Farming 6.5HP Petrol Water Pump
              </div>
            </div>
            <div className="row-span-2 -mt-1">
              <div className="grid-rows-2">
                <div className="row-span-1 flex justify-around">
                  <div className="text-slate-400 line-through ">₹ 20,000</div>
                  <div className=" font-bold ">₹ 11,199</div>
                </div>
                <div className="row-span-1 flex justify-around">
                 <Link to="/checkout">
                 <button 
                    
                    className="buy bg-yellow-500 text-md p-1 rounded-sm text-white flex gap-1"
                  >
                    <IoBagCheck className="text-white mt-1" /> Buy Now
                  </button>
                 </Link>
                  <button onClick={increment}
                    className="cart bg-green-500 text-white text-md p-1 rounded-sm flex gap-1"
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
  );
};

export default Cards;
