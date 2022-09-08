import React from "react";
import Image from "next/image";
import logo from "../public/assets/myLogo.jpg";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-[50px] py-16 bg-black flex justify-center items-center">
      <div className=" w-16 p-4 md:w-[70px] md:p-5  rounded-full h-auto bg-[#000000] border-2 border-gray-700 cursor-pointer ">
        <Image src={logo} alt="logo" />
      </div>
      <p className="text-gray-300 text-lg ml-4">Build by Andrei Rutty</p>
    </div>
  );
};

export default Footer;
