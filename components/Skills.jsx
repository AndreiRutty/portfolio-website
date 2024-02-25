import React from "react";
import SkillsCard from "./SkillsCard";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import tailwind from "../public/assets/skills/tailwind.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import node from "../public/assets/skills/node.png";
import express from "../public/assets/skills/express.png";
import mongoDB from "../public/assets/skills/mongodb.png";
import github from "../public/assets/skills/github.png";
import mysql from "../public/assets/skills/mysql.png";
import nextjs from "../public/assets/skills/nextjs.png";
import python from "../public/assets/skills/python.png";
import c from "../public/assets/skills/c.png";
import cplusplus from "../public/assets/skills/cplusplus.png";
import shell from "../public/assets/skills/shell.png";

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
          <SkillsCard skill="javascript" icon={javascript} />
          <SkillsCard skill="react" icon={react} />
          <SkillsCard skill="node" icon={node} />
          <SkillsCard skill="express" icon={express} />
          <SkillsCard skill="mongodb" icon={mongoDB} />
          <SkillsCard skill="github" icon={github} />
          <SkillsCard skill="mysql" icon={mysql} />
          <SkillsCard skill="nextjs" icon={nextjs} />
          <SkillsCard skill="python" icon={python} />
          <SkillsCard skill="C" icon={c} />
          <SkillsCard skill="C++" icon={cplusplus} />
          <SkillsCard skill="shell" icon={shell} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
