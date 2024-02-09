import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa6'
import { TiPin } from 'react-icons/ti'
import frame2 from "../Constant/Frame +2.png";
import frame5 from "../Constant/Frame +5.png";
const LeftPortion = () => {
  return (
    <div>
         
         <div>
            {/* head box */}
            <div className=" flex flex-col md:flex-row space-x-3   mt-2 mr-10">
              <div className=" ml-3  w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#FFEFE7] flex flex-col justify-between pb-3  shadow-md shadow-slate-300">
                <h1 className="  font-medium text-xl  mt-4">
                  Availabe Position{" "}
                </h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">24</h1>
                <p className=" text-[#FF5151] text-xl mt-3 font-light">
                  4 Urgently needed
                </p>
              </div>

              <div className=" w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#E8F0FB] flex flex-col justify-between pb-3 shadow-md shadow-slate-300">
                <h1 className="font-medium text-xl mt-4">Job Open</h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">10 </h1>
                <p className="text-[#3786F1] text-xl mt-3 font-light">
                  4 Active hiring
                </p>
              </div>

              <div className=" w-full md:w-1/3 h-44 rounded-xl mt-4 pl-5 bg-[#FDEBF9]   flex flex-col justify-between pb-3 shadow-md shadow-slate-300">
                <h1 className="font-medium text-xl  mt-4">New Employees</h1>
                <h1 className=" text-5xl font-mono font-bold mt-3">24</h1>
                <p className=" text-[#EE61CF] text-xl mt-3 font-light">
                  4 Department
                </p>
              </div>
            </div>

            {/* middle box */}

            <div className=" flex flex-col md:flex-row   justify-between mr-10 mb-0">
              <div className=" border-2 w-full lg:w-80 h-60 rounded-lg  mt-6 ml-2 pl-5 flex flex-row relative">
                <div className=" flex flex-col">
                  <h1 className="font-medium text-2xl  mt-5">
                    Total Employees
                  </h1>
                  <h1 className=" text-5xl font-mono font-bold mt-6">216 </h1>
                  <p className=" text-[#686868] text-sm mt-6">120 Men</p>
                  <p className=" text-[#686868] text-sm ">96 Women</p>
                </div>

                <span className=" absolute right-0">
                  <img src={frame2} alt="graph" className=" mt-10  h-32 mr-4" sizes />
                </span>
              </div>

              <div className=" border-2 w-full lg:w-80 h-60 rounded-lg ml-2 md:ml-4 pl-5 mt-6 flex flex-row relative ">
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
                  <img src={frame5} alt="graph" className=" mt-10  h-32 mr-4" />
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
                    <TiPin className=" m- text-[#4f4e4e]" size={30} />
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

                <p className=" text-[#FF5151]  font-semibold p-3 text-center">
                  See All Announcement
                </p>
              </div>
            </div>
          </div>

    </div>
  )
}

export default LeftPortion