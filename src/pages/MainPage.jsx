import React from "react";
import  Dashboard  from "../components/Dashboard";
import Yev from "../components/Yev";
import Portfolio from "../components/Portfolio";
const MainPage = () => {
  return (
      <div className="bg-white ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-2"><Dashboard/></div>
          <div className="col-span-12 md:col-span-4"><Yev/></div>
          <div className="col-span-12 md:col-span-6"><Portfolio/></div>
        </div>
      </div>
  );
};

export default MainPage;
