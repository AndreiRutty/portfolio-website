import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-200px w-full shadow-xl shadow-gray-400 rounded-xl p-2 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-[1.02] ease-in duration-[250ms]">
      <Image
        className="rounded-xl group-hover:opacity-10 h-full ease-in duration-[250ms]"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center w-[120px] py-3 rounded-lg bg-white text-gray-700 m-auto font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-[250ms]">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
