import React from "react";
import ProjectItem from "./ProjectItem";
import crytoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflixii.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
import smartBrainImg from "../public/assets/projects/smart-brain.png";
import animeDatabaseImg from "../public/assets/projects/animedatabase.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Smart Brain"
            backgroundImg={smartBrainImg}
            tech="React Js"
            projectUrl="/smartbrain"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={smartBrainImg}
            tech="React Js"
            projectUrl="/cryto"
          />
          <ProjectItem
            title="Netflix II"
            backgroundImg={netflixImg}
            tech="React Js"
            projectUrl="/netflixii"
          />
          <ProjectItem
            title="The Anime Database"
            backgroundImg={animeDatabaseImg}
            tech="React Js"
            projectUrl="/theanimedatabase"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
