import React from 'react'
import { FaAngleDown } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";

const RightPortion = () => {
  return (
    <div>

  {/* body right portion */}
          {/* first box */}
         
          <div className="  md:mt-4  mr-8 flex flex-col md:flex-row lg:flex-col ">
            <div className="  w-screen md:w-auto lg:w-[490px] h-auto  lg:h-[300px] rounded-xl m-2 bg-[#161E54] shadow-lg shadow-[#1b1f3d]">
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
              <p className=" text-slate-200 pl-6 mt-2 text-sm lg:text-base pr-2 mr-2 opacity-85">
                Kindly check the requirements and terms of work and
              </p>
              <p className=" text-slate-200 pl-6 text-sm lg:text-base opacity-85">
                sure everything is right.
              </p>

              <div className=" flex lg:flex-row flex-col items-center  justify-center lg:justify-between mx-6 mt-8 mb-2">
                <h1 className=" text-white lg:pl-6 p-2">
                  Today you makes 12 Activity
                </h1>
                <button className=" bg-[#FF5151] p-2 mx-auto px-8 rounded-md m-2 mb-2 lg:mb-0">
                  <p className=" text-white text-sm">See All Activity</p>
                </button>
              </div>
            </div>

            {/* second box */}

            <div className="border-2 w-screen md:w-auto h-auto rounded-lg  lg:mt-6 m-2  ">
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
                    <p className=" md:text-xs lg:text-base">Review candidate applications</p>
                    <p className=" md:text-xs lg:text-sm text-[#686868]">Today - 11:30 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <p className=" text-slate-400 absolute left-0 pl-4 top-24 md:top-20 lg:top-24 text-sm">
                  Other
                </p>

                <div className=" border-2 m-4 md:mt-4 lg:mt-8 w-11/12 h-auto bg-slate-50  p-4 pl-4 rounded-lg flex flex-row items-center justify-between">
                  <div>
                    <p className="  md:text-xs lg:text-base">Interview with candidates</p>
                    <p className=" md:text-xs lg:text-sm text-[#686868]">Today - 10:30 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <div className=" border-2 m-2 mt-1 w-11/12 h-auto bg-slate-50  p-4 pl-4 rounded-lg flex flex-row items-center justify-between md:hidden lg:block">
                  <div>
                    <p>
                      Short meeting with product designer from IT Departement
                    </p>
                    <p className=" text-sm text-[#686868]">Today - 09:15 AM</p>
                  </div>

                  <BsThreeDots size={20} className=" mx-4 text-[#686868]" />
                </div>

                <div className=" border-2  mt-1 w-11/12 h-auto bg-slate-50  p-2 rounded-t-lg flex flex-row items-center justify-between"></div>
                <div className="border-2   w-full"></div>

                <p className=" text-[#FF5151] mt-1 font-semibold text-center p-2">
                  Creat a New Schedule
                </p>
              </div>
            </div>
          </div>

    </div>
  )
}

export default RightPortion