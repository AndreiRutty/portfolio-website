import React from "react";
import SkillsCard from "./SkillsCard";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import tailwind from "../public/assets/skills/tailwind.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import node from "../public/assets/skills/node.png";
import github from "../public/assets/skills/github.png";
import postgresql from "../public/assets/skills/postgresql.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-center md:text-left uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-center md:text-left">What Tools I Use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard skill="html" icon={html} />
          <SkillsCard skill="css" icon={css} />
          <SkillsCard skill="tailwind" icon={tailwind} />
          <SkillsCard skill="javascript"icon={javascript} />
          <SkillsCard skill="react" icon={react} />
          <SkillsCard skill="node" icon={node} />
          <SkillsCard skill="github" icon={github} />
          <SkillsCard skill="postgresql"icon={postgresql} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
