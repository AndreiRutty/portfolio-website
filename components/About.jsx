import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center pt-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="text-center md:text-left text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-center md:text-left">Who I Am</h2>
          <p className="text-center mx-auto md:text-left text-lg py-3 text-gray-600 ">
            Hello, I&#39;m Andrei Rutty, a Computer Science Student. I am a passionate programmer with a strong
            focus on software engineering and web development. I utilize various
            web technologies to craft innovative solutions, addressing
            challenges across diverse industries. My commitment lies in
            uplifting my programming skills by leveraging the power of
            technology to create impactful projects, aiming to make a positive
            difference in different niches.
          </p>
          <Link href="#projects">
            <p className="text-center md:text-left py-2 text-gray-600 cursor-pointer hover:text-gray-800 hover:underline transition-all duration-[250ms]">
              Check out some of my lastest project
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
