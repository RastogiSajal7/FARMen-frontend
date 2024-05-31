import React from "react";
import Carousel from "../components/Carousel.jsx";
import Navbar from "../components/Navbar";
import ComponentBreaker from "../components/componentBreaker";
import Card from "../components/Cards.jsx";
import CardsMajor from "../components/CardsMajor.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Selectors from "../components/Selectors.jsx";
import { FaCircleArrowDown } from "react-icons/fa6";
import Auth from "../HOC/Auth.jsx";

const FarmerBuy = () => {
  return (
    <div>
      <Navbar  />
      <SearchBar />
      <h1 className="font-serif text-3xl flex ml-10 mb-10 gap-3">Quick Section <FaCircleArrowDown className="text-orange-950 mt-1 text-4xl hover:-scale-y-95 " /></h1>
      <Selectors/>
      <Carousel />
      <ComponentBreaker />
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-8">
          <Card />
        </div>
        <div className="col-span-4">
          <CardsMajor />
        </div>
      </div>
    </div>
  );
};

export default FarmerBuy;
