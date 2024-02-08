import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import frame2 from "../Constant/Frame +2.png";
import frame5 from "../Constant/Frame +5.png";
import { FaAngleDown } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

const Body = () => {
  return (
    <div className=" flex flex-row">

      <div className=" hidden md:flex">
      <SideBar />
      </div>
      <div className=" ml-4 md:ml-8">
        <NavBar />
        <div>
          <h1 className=" text-4xl m-6">Dashboard</h1>
        </div>
        <div className=" flex  flex-col md:flex-row ">
          {/* body left portion */}
          <div>
            {/* head box */}
            <div className=" flex flex-col md:flex-row space-x-3   mt-2 mr-10">
              <div className=" ml-3 border-2 w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#FFEFE7] ">
                <h1 className="  font-medium text-xl  mt-4">
                  Availabe Position{" "}
                </h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">24</h1>
                <p className=" text-[#FF5151] text-xl mt-3 font-light">
                  4 Urgently needed
                </p>
              </div>

              <div className="border-2 w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#E8F0FB]">
                <h1 className="font-medium text-xl mt-4">Job Open</h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">10 </h1>
                <p className="text-[#3786F1] text-xl mt-3 font-light">
                  4 Active hiring
                </p>
              </div>

              <div className="border-2 w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#FDEBF9]">
                <h1 className="font-medium text-xl  mt-4">New Employees</h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">24</h1>
                <p className=" text-[#EE61CF] text-xl mt-3 font-light">
                  4 Department
                </p>
              </div>
            </div>

            {/* middle box */}

            <div className=" flex flex-col md:flex-row   justify-between mr-10 mb-0">
              <div className=" border-2 w-full md:w-80 h-60 rounded-lg  mt-6 ml-2 pl-5 flex flex-row relative">
                <div className=" flex flex-col">
                  <h1 className="font-medium text-2xl  mt-5">
                    {" "}
                    Total Employees
                  </h1>
                  <h1 className=" text-5xl font-mono font-bold mt-6">216 </h1>
                  <p className=" text-[#686868] text-sm mt-6">120 Men</p>
                  <p className=" text-[#686868] text-sm ">96 Women</p>
                </div>

                <span className=" absolute right-0">
                  <img src={frame2} className=" mt-10  h-32 mr-4" sizes />
                </span>
              </div>

              <div className=" border-2 w-full md:w-80 h-60 rounded-lg ml-2 md:ml-4 pl-5 mt-6 flex flex-row relative ">
                <div className=" flex flex-col">
                  <h1 className="font-medium text-2xl  mt-5">
                    {" "}
                    Talent Request
                  </h1>
                  <h1 className=" text-5xl font-mono font-bold mt-6">16 </h1>
                  <p className=" text-[#686868] text-sm mt-6">6 Men</p>
                  <p className=" text-[#686868] text-sm ">10 Women</p>
                </div>

                <span className=" absolute  right-0">
                  <img src={frame5} className=" mt-10  h-32 mr-4" />
                </span>
              </div>
            </div>

            {/* lower box */}

            <div className=" border-2  w-screen md:w-auto h-auto rounded-lg mr-10 m-2 mt-4 ">
              {/* Header */}
              <div className=" flex flex-row justify-between m-2 p-2">
                <h1 className=" ml-4 font-semibold text-2xl">Announcement</h1>
                <span className=" border-2 p-1 rounded-md flex flex-row">
                  <p className=" text-sm text-[#686868]">Today, 13 Sep 2021 </p>
                  <FaAngleDown className=" mt-1 mx-2 text-sm opacity-50" />
                </span>
              </div>

              {/* body */}
              <div className=" flex flex-col items-center justify-center mt-6">
                <div className=" border-2 m-4 mt-1 w-11/12 h-auto bg-slate-50  p-2 pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p>Outline schedule for every Department</p>
                    <p className=" text-sm text-[#686868]">5 minutes ago</p>
                  </div>
                  <div className=" flex flex-row items-center justify-center">
                    <TiPin className=" m- text-[#686868]" size={30} />
                    <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                  </div>
                </div>

                <div className=" border-2 m-4 mt-1 w-11/12 h-auto bg-slate-50  p-2 pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p>Meeting HR Department</p>
                    <p className=" text-sm text-[#686868]">
                      Yesterday, 12:30 PM
                    </p>
                  </div>
                  <div className=" flex flex-row items-center justify-center">
                    <TiPin className=" m- text-[#686868]" size={30} />
                    <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                  </div>
                </div>

                <div className=" border-2 border-b-0 m-4 mb-0 mt-1 w-11/12 h-auto bg-slate-50  p-2 pl-4 pb-2 rounded-t-lg flex flex-row items-center justify-between">
                  <div>
                    <p>It Department need two more Talents for UX/UI</p>{" "}
                    <p>Designer position</p>
                    <p className=" text-sm text-[#686868]">
                      Yesterday, 09:15 AM
                    </p>
                  </div>
                  <div className=" flex flex-row items-center justify-center">
                    <TiPin className="  text-[#686868]" size={30} />
                    <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                  </div>
                </div>

                <div className="border-2  mb-2 w-full"></div>

                <p className=" text-[#FF5151]  font-semibold p-2 text-center">
                  See All Announcement
                </p>
              </div>
            </div>
          </div>

          {/* body right portion */}

          <div className="  md:mt-4   ">
            <div className=" border-2  w-screen md:w-[490px] h-[300px] rounded-xl m-2 bg-[#161E54]">
              <div className="bg-[#1B204A] rounded-xl">
                <h1 className=" text-white font-medium text-xl  p-4">
                  Recently Activity
                </h1>
              </div>
              <p className=" text-slate-300 text-xs pl-6 mt-6">
                10.40 AM, Fri 10 Sept 2021
              </p>
              <h1 className=" text-white  pl-6 p-4 font-semibold text-xl">
                You Posted a New Job
              </h1>
              <p className=" text-slate-200 pl-6 mt-2 text-sm">
                Kindly check the requirements and terms of work and
              </p>
              <p className=" text-slate-200 pl-6 text-sm">
                sure everything is right.
              </p>

              <div className=" flex flex-row justify-between mr-6 mt-8">
                <h1 className=" text-white pl-6 p-2">
                  Today you makes 12 Activity
                </h1>
                <button className=" bg-[#FF5151] p-2 px-4 rounded-md">
                  <p className=" text-white text-sm">See All Activity</p>
                </button>
              </div>
            </div>






            <div className="border-2 w-screen md:w-auto h-auto rounded-lg  mt-6 m-2  ">
              <div className=" flex flex-row justify-between m-2 p-2 items-center">
                <h1 className="  font-semibold text-xl">Upcoming Schedule</h1>
                <span className=" border-2 p-1 rounded-md flex flex-row">
                  <p className=" text-xs text-[#686868]">Today, 13 Sep 2021 </p>
                  <FaAngleDown className=" mt-[2px] mx-1 text-xs opacity-50" />
                </span>
              </div>

              <p className=" text-slate-400 pl-4 text-sm">Priority</p>

              <div className=" flex flex-col items-center justify-center mt-2 relative">
                <div className=" border-2 m-4 p-4 mt-1 w-11/12 h-auto bg-slate-50  pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p>Review candidate applications</p>
                    <p className=" text-xs text-[#686868]">Today - 11:30 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <p className=" text-slate-400 absolute left-0 pl-4 top-24 text-sm">
                  Other
                </p>

                <div className=" border-2 m-4 mt-8 w-11/12 h-auto bg-slate-50  p-4 pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p>Interview with candidates</p>
                    <p className=" text-sm text-[#686868]">Today - 10:30 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <div className=" border-2 m-2 mt-1 w-11/12 h-auto bg-slate-50  p-4 pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p>Short meeting with product designer from IT Departement</p>
                    <p className=" text-sm text-[#686868]">Today - 09:15 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <div className=" border-2  mt-1 w-11/12 h-auto bg-slate-50  p-2 rounded-t-lg flex flex-row items-center justify-between">
                

                
                </div>
                <div className="border-2   w-full"></div>

                <p className=" text-[#FF5151] mt-1 font-semibold text-center p-2">
                Creat a New Schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
