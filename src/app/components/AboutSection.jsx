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
    <div className="flex flex-col sm:items-center md:flex-row md:justify-between gap-10 my-20 md:h-screen md:my-0 text-white">
      <div className="rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden">
        <Image
          src="/images/about-image.jpg"
          alt="programming"
          width={700}
          height={700}
        />
      </div>
      <div className="md:w-1/2 ">
        <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
        <p className="text-base lg:text-lg mb-4">
          Sou um desenvolvedor web apaixonado por criar aplicações web
          interativas e responsivas. Tenho experiência em trabalhar com
          JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS e
          Git. Aprendo rápido e estou sempre em busca de expandir meus
          conhecimentos e habilidades. Trabalho em equipe e estou animado para
          trabalhar com outras pessoas para criar aplicativos incríveis.
        </p>
        <div className="collapse bg-base-200 mb-2">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">Habilidades</div>
          <div className="collapse-content">
            <ul>
              <li>React</li>
              <li>Next</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Ensino</div>
          <div className="collapse-content">
            <ul>
              <li>Superior em: Ciência da Computação - CEUB</li>
            </ul>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Certificados</div>
          <div className="collapse-content">
            <ul>
              <li>Em breve...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
