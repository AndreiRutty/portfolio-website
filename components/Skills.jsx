import React from "react";
import SkillsCard from "./SkillsCard";
import skillsData from "../pages/api/skills";

const Skills = () => {
  const skills = skillsData;

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-center md:text-left uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-center md:text-left">What Tools I Use</h2>
        <div className="grid mb-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ skill, icon }) => (
            <SkillsCard key={skill} skill={skill} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
