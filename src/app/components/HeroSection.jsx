"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="md:h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-10 mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
          }}
          className="col-span-6 place-self-center text-center md:text-left"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
              Olá, eu sou
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Higor Rocha",
                1500,
                "Web Developer",
                1500,
                "Mobile Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Sou um programador apaixonado por tecnologia e resolução de
            problemas, especializado em transformar ideias em soluções
            funcionais por meio de código limpo, eficiente e bem estruturado.
          </p>
          <div>
            <Link
              href="#Contatos"
              className="px-6 py-3 w-fit rounded-full mr-4 bg-gradient-to-br from-orange-600 to-purple-600 text-white"
            >
              Contatos
            </Link>
            <button className="px-1 py-1 w-fit rounded-full bg-gradient-to-br from-orange-600 to-purple-600 text-white mt-3">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                Baixar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
          }}
          className="col-span-3 place-self-center md:col-end-11 mt-12 md:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
            <Image
              src="/images/hero-image.jpg"
              alt="eu mesmo"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
