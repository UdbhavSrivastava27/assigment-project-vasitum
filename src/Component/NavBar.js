import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import SideBar from "./SideBar";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle); // Toggle the state
  };
  return (
    <div className=" flex ">
      <span className=" lg:hidden">
       {!toggle ? (
        <RxHamburgerMenu onClick={toggleSidebar} className=" h-10 text-4xl mt-6" />
      ) : (
        <RxCross2 onClick={toggleSidebar}  className=" text-4xl mt-6"/>
      )}
         </span>

    <div className=" flex flex-row justify-between border-b-2 p-4 w-full">
     
      {/* Sidebar component */}
      {toggle && <div className=" absolute top-20 left-2 "> <SideBar /></div>}

      {/* Search Bar */}
      <div className="flex items-center border-2 m-2 p-2 w-4/12 rounded-lg bg-slate-50">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-slate-50 "
        />
        <span>
          <CiSearch className="ml-2 text-2xl text-gray-500" />
        </span>
      </div>

      {/* info bar  */}
      <div className=" flex flex-row items-center justify-center  mr-10">
        <IoIosNotifications size={30} className=" mr-4 text-slate-500" />
        <RiMessage2Line size={30} className=" mr-4 text-slate-500" />
        <FaUserCircle size={30} className=" text-slate-500" />
        <p className=" ml-2">Admirra John</p>
        <FaAngleDown size={20} className=" ml-2 opacity-60" />
      </div>
    </div>

    </div>
  );
};

export default NavBar;
