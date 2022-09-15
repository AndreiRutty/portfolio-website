import React from "react";
import Image from "next/image";
import Link from "next/link";
import smartbrainImg from "../public/assets/projects/smart-brain.png";
import { RiRadioButtonFill } from "react-icons/ri";

const SmartBrain = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={smartbrainImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Smart Brain</h2>
          <h3>React JS / Node Js / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A Full-Stack application featuring face detection with the help of
            the Clarifai Face Detection API. It also features user registration
            and authentication. It keeps track on the entry count for each face detected.
          </p>
          <Link href="https://andreirutty.github.io/smart-brain/">
            <a target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-[250ms] submit_button">
                Demo
              </button>
            </a>
          </Link>
          <Link href="https://github.com/AndreiRutty/smart-brain/tree/master">
            <a target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-2 mt-4 hover:scale-105 ease-in duration-[250ms] submit_button">
                Code
              </button>
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Clarifai API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default SmartBrain;
