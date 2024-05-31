import React from "react";
import  Dashboard  from "../basicComponents/Dashboard";
import Yev from "../basicComponents/Yev";
import Portfolio from "../basicComponents/Portfolio";
const MainPage = () => {
  return (
    // <div className="bg-slate-200 h-screen lg:pr-60 lg:pl-60 lg:pt-6 sm:p-6">
      <div className="border-4 bg-white border-slate-900 ">
        <div className="grid grid-cols-12 h-screen">
          <Dashboard/>
          <Yev/>
          <Portfolio/>
        </div>
      </div>
    // </div> 
  );
};

export default MainPage;
