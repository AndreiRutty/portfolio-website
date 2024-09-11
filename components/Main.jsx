import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import "animate.css";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="animate__animated animate__fadeInUp py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Andrei</span>.
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s py-4 text-[1.1rem] text-gray-600 max-w-[80%] m-auto">
            A Computer Science student dedicated to learn and explore the
            ever-evolving world of technology.
          </p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s uppercase text-base font-bold tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <div className="my-6">
            <div className="animate__animated animate__fadeInUp animate__delay-2s flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                <Link href="https://www.linkedin.com/in/andrei-rutty-049533223/">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                <Link href="https://github.com/AndreiRutty">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                <Link href="https://drive.google.com/file/d/1yI_PH75XiySuOk8PuaPfziinEfyjPCZF/view?usp=drive_link">
                  <BsFillFileEarmarkTextFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
