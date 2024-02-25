import React from "react";
import Image from "next/image";
import Link from "next/link";
import animeDatabaseImg from "../public/assets/projects/animedatabase.png";
import { RiRadioButtonFill } from "react-icons/ri";

const AnimeDatabase = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={animeDatabaseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">The Anime Database</h2>
          <h3>React JS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and is hosted on Github Pages.
            This application is pulling anime data from the Jikan API and
            displaying movies or series of a particular anime as well as the top
            animes.
          </p>
          <Link href="https://andreirutty.github.io/anime-database/">
            <a target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-[250ms] submit_button">
                Demo
              </button>
            </a>
          </Link>
          <Link href="https://github.com/AndreiRutty/anime-database/tree/master">
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
                SCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Jikan API
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

export default AnimeDatabase;
