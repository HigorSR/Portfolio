"use client";

import ProjectCard from "./ProjectCar";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "a",
      img: "/images/about-image.jpg",
      code: "code",
      live: "live",
    },
    {
      id: 2,
      title: "b",
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
    <div className="flex flex-col items-center gap-10 text-white my-10">
      <h1 className="text-4xl font-bold">Projetos</h1>
      <div className="flex gap-8">
        <button>Tudo</button>
        <button>Web</button>
        <button>Mobile</button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
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
    </div>
  );
}
