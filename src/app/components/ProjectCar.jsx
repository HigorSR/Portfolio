import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, img, code, live }) => {
  return (
    <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
      <div className="relative group/item">
        <Image src={img} width={450} height={450} alt="project 1"></Image>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 invisible group-hover/item:visible">
          <span>{code}</span>
          <span>{live}</span>
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectCard;
