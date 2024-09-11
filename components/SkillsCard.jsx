import React from "react";
import Image from "next/image";

const SkillsCard = ({ skill, icon }) => {

  const imgSize = 60;

  return (
    <div className="flex flex-col items-center justify-center p-6 shadow-xl bg-gray-100 rounded-xl border-[3px] hover:border-gray-300 hover:scale-105 ease-in duration-[250ms] cursor-pointer hover:shadow-2xl">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={icon}
            alt="/"
            width={imgSize}
            height={imgSize}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="uppercase">{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
