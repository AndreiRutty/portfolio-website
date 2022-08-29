import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-center md:text-left uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-center md:text-left">What Tools I Use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard skill="html" />
          <SkillsCard skill="css" />
          <SkillsCard skill="tailwind" />
          <SkillsCard skill="javascript" />
          <SkillsCard skill="react" />
          <SkillsCard skill="node" />
          <SkillsCard skill="github" />
          <SkillsCard skill="postgresql" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
