import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import tractorBuy from '../assets/agriEquip/tractorBuy.png';
const CardsMajor = () => {
  const numCards = 14; // Number of cards you want to render

  // Function to generate an array of numbers from 1 to numCards
  const generateCardIds = () => {
    return Array.from({ length: numCards }, (_, index) => index + 1);
  };

  return (
    <div className="card flex flex-row flex-wrap justify-start p-4 gap-8">
      {/* Loop through the array of card ids and render a card for each id */}
      {generateCardIds().map((cardId) => (
        <div
          key={cardId}
          id={`card-${cardId}`}
          className=" rounded-md bg-white border-solid shadow-md  h-auto w-auto p-2 "
        >
          <div className="grid grid-rows-12">
            <div
              className="row-span-7 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${tractorBuy})` }}
            >
              <p className="bg-green-200 inline p-2 -m-4 border-t-4 border-green-400 rounded-e-3xl font-semibold italic text-orange-950 ">
                -32%
              </p>
            </div>
            <div className="row-span-3">
              <div className="font-bold text-center ">DigitracTractor</div>
              <div className="description text-slate-600 text-center">
                New way of modern farming for modern farmers
              </div>
            </div>
            <div className="row-span-2 -mt-1">
              <div className="grid-rows-2">
                <div className="row-span-1 flex justify-around">
                  <div className="text-slate-400 line-through ">₹ 20,000</div>
                  <div className=" font-bold ">₹ 11,199</div>
                </div>
                <div className="row-span-1 flex justify-around">
                  <a
                    href=""
                    className="buy bg-yellow-500 text-md p-1 rounded-sm text-white flex gap-1"
                  >
                    <IoBagCheck className="text-white mt-1" /> Buy Now
                  </a>
                  <a
                    href=""
                    className="cart bg-green-500 text-white text-md p-1 rounded-sm flex gap-1"
                  >
                    <FaCartArrowDown className="text-white mt-1" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsMajor;
