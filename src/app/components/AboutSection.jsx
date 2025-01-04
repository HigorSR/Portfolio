import Image from "next/image";

const sobreItems = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Next</li>
        <li>JavaScript</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>API</li>
      </ul>
    ),
  },
  {
    title: "Ensino",
    id: "education",
    content: (
      <ul>
        <li>Superior em: Ciência da Computação - CEUB</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certifications",
    content: (
      <ul>
        <li>Em breve...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:flex-row py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="">
          <Image
            src="/images/about-image.jpg"
            alt="a"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor web apaixonado por criar aplicações web
            interativas e responsivas. Tenho experiência em trabalhar com
            JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS e
            Git. Aprendo rápido e estou sempre em busca de expandir meus
            conhecimentos e habilidades. Trabalho em equipe e estou animado para
            trabalhar com outras pessoas para criar aplicativos incríveis.
          </p>
          <div>
            {/* área com as listas */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
