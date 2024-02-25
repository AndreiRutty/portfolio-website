import React from "react";
import Image from "next/image";
import Link from "next/link";
import lastHopeImage from "../public/assets/projects/last-hope.png";
import { RiRadioButtonFill } from "react-icons/ri";

const LastHope = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={lastHopeImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Last Hope</h2>
          <h3>HTML / Tailwind CSS / Js / Phaser Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A captivating strategic and survival game built with the powerful
            Phaser JS game engine. Your mission, should you choose to accept it,
            is to collect a maximum amount of surviving items and hide in the
            bunker within the time limits. It features user-friendly interface,
            user registration, local data storage and easy to use controls.
          </p>
          <Link href="https://last-hope.netlify.app/">
            <a target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-[250ms] submit_button">
                Demo
              </button>
            </a>
          </Link>
          <Link href="https://github.com/AndreiRutty/CST2120_CW1_game_website">
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
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Phaser Js
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

export default LastHope;
