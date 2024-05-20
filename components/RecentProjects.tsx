/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinCard } from "./ui/PinCard";

const RecentProjects = () => {
  return (
    <div className="w-full flex flex-wrap justify-center" id="projects">
      {projects.map((project) => (
        <PinCard
          key={project.id}
          title={project.title}
          des={project.des}
          img={project.img}
          link={project.link}
          iconLists={project.iconLists}
        />
      ))}
    </div>
  );
};

export default RecentProjects;
