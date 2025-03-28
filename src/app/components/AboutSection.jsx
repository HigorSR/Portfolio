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
    <div
      id="Sobre"
      className="flex flex-col sm:items-center lg:items-start lg:flex-row md:justify-between gap-10 my-20 lg:h-screen md:my-0 text-white lg:pt-40"
    >
      <div className="rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none overflow-hidden md:w-[500px] lg:w-[700px]">
        <Image
          src="/images/about-image.jpg"
          alt="programming"
          width={700}
          height={700}
        />
      </div>
      <div className="lg:w-1/2 ">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg mb-4">
            Sou um desenvolvedor web apaixonado por criar aplicações web
            interativas e responsivas. Tenho experiência em trabalhar com
            JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS e
            Git. Aprendo rápido e estou sempre em busca de expandir meus
            conhecimentos e habilidades. Trabalho em equipe e estou animado para
            trabalhar com outras pessoas para criar aplicativos incríveis.
          </p>
        </div>
        <div className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-white text-base"
            aria-label="Habilidades"
            defaultChecked
          />
          <div className="tab-content bg-base-100 rounded-2xl border-base-300 p-6">
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>API</li>
            </ul>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-white"
            aria-label="Ensino"
          />
          <div className="tab-content bg-base-100 p-6">
            <ul className="list-disc list-inside">
              <li>Superior em: Ciência da Computação - CEUB</li>
            </ul>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-white"
            aria-label="Certificados"
          />
          <div className="tab-content bg-base-100 p-6">
            <ul className="list-disc list-inside">
              <li>Em breve...</li>
            </ul>
          </div>
        </div>
        
        {/* <div className="collapse collapse-arrow bg-base-200 mb-2 px-1 py-1 bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800 text-white mt-3">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">Habilidades</div>
          <div className="collapse-content">
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-2 px-1 py-1 bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800 text-white mt-3">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Ensino</div>
          <div className="collapse-content">
            <ul className="list-disc list-inside">
              <li>Superior em: Ciência da Computação - CEUB</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-2 px-1 py-1 bg-gradient-to-br from-orange-600 to-purple-600 hover:bg-slate-800 text-white mt-3">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Certificados</div>
          <div className="collapse-content">
            <ul className="list-disc list-inside">
              <li>Em breve...</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
