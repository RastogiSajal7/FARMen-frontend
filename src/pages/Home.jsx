import React, { useState, useRef } from "react";
import ComponentBreaker from "../components/componentBreaker";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Adv from "../components/Adv";
import MyCarousel from "../components/Carousel";
import Selectors from "../components/Selectors";
import GetProd from "../components/GetProd";
import Auth from "../HOC/Auth";
import { motion } from "framer-motion";
import Farms from "../components/Farms";
import Footer from "../components/Footer";

const Home = () => {
  const [showGetProd, setShowGetProd] = useState(false);
  const getProdRef = useRef(null); 

  const handleGetProd = () => {
    setShowGetProd(true);
    setTimeout(() => {
      if (getProdRef.current) {
        getProdRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleFarmClick = (farm) => {
    console.log(farm); // Optional: log the clicked farm data
    handleGetProd();
  };

  return (
    <>
      <Navbar />
      <SearchBar />
      <ComponentBreaker />
      <Adv />
      <ComponentBreaker />
      <MyCarousel />
      <ComponentBreaker />
      <Selectors />
      <ComponentBreaker />
      <Farms onFarmClick={handleFarmClick} />
      <ComponentBreaker />
      <div ref={getProdRef}>
        {showGetProd && <GetProd />}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
