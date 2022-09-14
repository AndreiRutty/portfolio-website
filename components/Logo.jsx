import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/myLogo.jpg";
import 'animate.css';

const Logo = () => {
  return (
    <Link href="/">
      <div className="animate__animated animate__fadeInLeft w-16 p-4 ml-2 md:w-[70px] md:p-5 md:ml-0 rounded-full h-auto bg-[#000000] shadow-lg shadow-gray-600 cursor-pointer hover:scale-105 ease-in duration-[250ms]">
        <Image src={logo} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
