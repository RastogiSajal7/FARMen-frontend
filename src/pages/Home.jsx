import React, { useState, useRef, useEffect } from "react";
import ComponentBreaker from "../components/componentBreaker";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Adv from "../components/Adv";
import MyCarousel from "../components/Carousel";
import Selectors from "../components/Selectors";
import GetProd from "../components/GetProd";
import Auth from "../HOC/Auth";
import Farms from "../components/Farms";
import Footer from "../components/Footer";

const Home = () => {
  const [showGetProd, setShowGetProd] = useState(false);
  const getProdRef = useRef(null); 

  const [userDetails, setUserDetails] = useState(null);
  const [selectedFarm, setSelectedFarm] = useState(null); // Track the selected farm

  useEffect(() => {
    const userDet = JSON.parse(localStorage.getItem("user"));
    setUserDetails(userDet);
  }, []);

  const handleGetProd = () => {
    setShowGetProd(true);
    setTimeout(() => {
      if (getProdRef.current) {
        getProdRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleFarmClick = (farm) => {
    setSelectedFarm(farm); // Pass the full farm object
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
      {userDetails && userDetails.accountType === "Buyer" && (
        <>
          <Farms onFarmSelect={handleFarmClick} />
          <ComponentBreaker />
          <div ref={getProdRef}>
            {showGetProd && <GetProd selectedFarm={selectedFarm} />} {/* Pass selectedFarm */}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Auth(Home);
