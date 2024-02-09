import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import RightPortion from "./RightPortion";
import LeftPortion from "./LeftPortion";

const Body = () => {
  return (
    <div className=" flex flex-row">
      <div className=" hidden md:flex">
        <SideBar />
      </div>
      <div className=" ml-4 md:ml-8">
        <NavBar />
        <div>
          <h1 className=" text-4xl m-6 font-semibold">Dashboard</h1>
        </div>
        <div className=" flex  flex-col lg:flex-row ">
          {/* body left portion */}
          <LeftPortion />

          {/* body right portion */}
          <RightPortion />
        </div>
      </div>
    </div>
  );
};

export default Body;
