import React, { useState } from "react";
import Logo from "../Constant/logo.png";
import { FaBox } from "react-icons/fa6";
import { IoIosPersonAdd } from "react-icons/io";
import { FcCalendar } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { BsDiscFill } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import LogoName from "../Constant/logoname.png";

const SideBar = () => {
  return (
    <div className=" bg-slate-50  ">
      <div className=" w-auto h-screen flex-1 ">
        <div className="flex items-center justify-center mt-4">
          <img src={Logo} className=" m-2 " alt="logo" />
          <img src={LogoName} className=" m-2 hidden lg:flex" />
        </div>

        <p className=" text-sm px-8 mt-14 font-semibold text-slate-400">
          MAIN MENU
        </p>

        <div className=" flex flex-row ">
          <div className="flex flex-col my-6 ml-6 justify-between ">
            <FaBox size={40} className="my-3 text-red-600" />
            <IoIosPersonAdd size={40} className="mt-6 " />
            <FcCalendar size={40} className="mt-6 " />
            <IoIosPeople size={40} className="mt-6 " />
            <BsDiscFill size={40} className="mt-6 " />
            <SlEarphonesAlt size={40} className="mt-24 " />
            <IoSettingsOutline size={40} className=" mt-6" />
          </div>

          <div className=" hidden lg:flex px-6">
            <div className=" text-xl font-semibold mt-12">
              <h1 className="text-red-600">Dashboard</h1>
              <h1 className=" mt-10">Recruitmnet</h1>
              <h1 className=" mt-10">Schedule</h1>
              <h1 className=" mt-10">Employee</h1>
              <h1 className=" mt-10">Departement</h1>

              <h1 className="mt-28">Support</h1>
              <h1 className="mt-10">Settings</h1>
            </div>
          </div>
        </div>

        <p className=" text-sm px-8 -mt-44 font-semibold text-slate-400 ">
          OTHER
        </p>
      </div>
    </div>
  );
};

export default SideBar;