import React from "react";
import ProjectItem from "./ProjectItem";
import netflixImg from "../public/assets/projects/netflixii.png";
import animeDatabaseImg from "../public/assets/projects/animedatabase.png";
import portfolioImg from "../public/assets/projects/portfolio.png";
import lastHopeImage from "../public/assets/projects/last-hope.png";

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
            title="Portfolio Website"
            backgroundImg={portfolioImg}
            tech="Next Js"
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Netflix II"
            backgroundImg={netflixImg}
            tech="React Js & Firebase"
            projectUrl="/netflixii"
          />
          <ProjectItem
            title="The Anime Database"
            backgroundImg={animeDatabaseImg}
            tech="React Js"
            projectUrl="/theanimedatabase"
          />
          <ProjectItem
            title="Last Hope"
            backgroundImg={lastHopeImage}
            tech="HTML CSS Js"
            projectUrl="/lasthope"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
