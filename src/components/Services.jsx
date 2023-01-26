import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiCheckedShield, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="main-box flex flex-col items-center h-72 md:flex-row gap-5 w-[85%] mx-auto mt-4 select-none">
        <div className="1st-box bg-gray-100 w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-center cursor-pointer">
          <MdOutlineLocalShipping className="text-3xl bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
          <span className="text-gray-700">Super Fast Shipping </span>
        </div>

        <div className="2nd-box bg-gray-100  w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-between md:bg-white  cursor-pointer">
          <div className="top-box  w-full flex flex-col items-center justify-center md:gap-5 bg-gray-100 h-[45%] rounded-xl ">
            <GiCheckedShield className="text-3xl bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
            <span className="text-gray-700">Non Contact Shipping</span>
          </div>
          <div className="bottom  w-full flex flex-col items-center justify-center md:gap-5 bg-gray-100 h-[45%] rounded-xl cursor-pointer">
            <GiReceiveMoney className="text-3xl bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
            <span className="text-gray-700">Money-Back Guarantee</span>
          </div>
        </div>

        <div className="3rd-box bg-gray-100 w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-center cursor-pointer">
          <RiSecurePaymentLine className="text-3xl bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
          <span className="text-gray-700">Secure Payment System</span>
        </div>
      </div>
    </>
  );
};

export default Services;
