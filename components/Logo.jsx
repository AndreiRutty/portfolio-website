import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/myLogo.jpg";

const Logo = () => {
  return (
    <Link href="/">
      <div className=" w-16 p-4 ml-2 md:w-[70px] md:p-5 md:ml-0 rounded-full h-auto bg-[#000000] shadow-lg shadow-gray-600 cursor-pointer hover:scale-110 ease-in duration-200">
        <Image src={logo} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
