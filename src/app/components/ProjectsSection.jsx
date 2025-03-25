"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Intro Component With Sign Up Form",
      img: "/images/project01.png",
      code: "https://github.com/HigorSR/intro-component-with-sign-up-form",
      live: "https://higorsr.github.io/intro-component-with-sign-up-form/",
    },
    {
      id: 2,
      title: "Projeto 02",
      img: "/images/about-image.jpg",
    },
    {
      id: 3,
      title: "c",
      img: "/images/about-image.jpg",
    },
    {
      id: 4,
      title: "f",
      img: "/images/about-image.jpg",
    },
    {
      id: 5,
      title: "r",
      img: "/images/about-image.jpg",
    },
    {
      id: 6,
      title: "f",
      img: "/images/about-image.jpg",
    },
  ];

  return (
    <section
      id="Projetos"
      className="flex flex-col items-center gap-10 text-white my-10 md:pt-10"
    >
      <h1 className="text-4xl font-bold">Projetos</h1>
      <div className="flex gap-8">
        <div className="hidden md:inline text-lg px-1 py-1 rounded-full bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800">
          <button className="block px-4 py-3 bg-[#242424] hover:bg-slate-800 rounded-full">
            Tudo
          </button>
        </div>
        <div className="hidden md:inline text-lg px-1 py-1 rounded-full bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800">
          <button className="block px-4 py-3 bg-[#242424] hover:bg-slate-800 rounded-full">
            Web
          </button>
        </div>
        <div className="hidden md:inline text-lg px-1 py-1 rounded-full bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800">
          <button className="block px-4 py-3 bg-[#242424] hover:bg-slate-800 rounded-full">
            Mobile
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-7 md:gap-x-12 gap-y-8 sm:gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            img={project.img}
            code={project.code}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}
