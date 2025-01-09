import React from "react";
import Image from "next/image";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="w-[250px] md:w-[300px] lg:w-[400px]">
      <div className="relative group/item">
        <Image src={img} width={450} height={450} alt="project 1"></Image>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 invisible group-hover/item:visible">
          <Link
            href={"https://www.youtube.com/watch?v=TO03Lph7wQQ"}
            target="_blank"
            className="p-4 rounded-full bg-slate-700/75 border hover:bg-slate-700/90"
          >
            <CodeIcon />
          </Link>
          <Link
            href={"https://www.youtube.com/watch?v=TO03Lph7wQQ"}
            target="_blank"
            className="p-4 rounded-full bg-slate-700/75 border hover:bg-slate-700/90"
          >
            <VisibilityIcon />
          </Link>
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectCard;
