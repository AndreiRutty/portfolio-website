import React from "react";
import ProjectItem from "./ProjectItem";
import crytoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import smartBrainImg from "../public/assets/projects/smart-brain.png";

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
            backgroundImg={crytoImg}
            tech="React Js"
            projectUrl="/cryto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            tech="React Js"
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={twitchImg}
            tech="React Js"
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
