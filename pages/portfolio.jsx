import React from "react";
import Image from "next/image";
import Link from "next/link";
import portfolioImg from "../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Website</h2>
          <h3>Next Js / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A personal portfolio website built with Next Js and Tailwind CSS showcasing my web development skills and projects.
          </p>
          <Link href="https://github.com/AndreiRutty/portfolio-website">
            <a target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-[250ms] submit_button">
                Demo
              </button>
            </a>
          </Link>
          <Link href="https://github.com/AndreiRutty/portfolio-website">
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
                Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default Portfolio;
