// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <section className=" md:h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-t from-[#0c0c1d] to-[#111132] text-center ">
      {/* Gradient Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-0 pointer-events-none" /> */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold "
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={0}
      >
        👋{" "}
        <span className="bg-gradient-to-r from-slate-600 to-slate-200  bg-clip-text text-transparent tracking-tight cursor-default">
          ¡Hola! Soy María,
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-white mt-4 max-w-3xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={1}
      >
        una desarrolladora front-end apasionada por transformar ideas en sitios
        web modernos y fluidos.
      </motion.h2>

      <motion.p
        className="mt-8 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={2}
      >
        Me especializo en crear interfaces adaptables, rápidas y con animaciones
        cuidadas, utilizando React, Tailwind CSS y Framer Motion. Mi objetivo es
        ayudar a pequeñas empresas, creativos y emprendedores a destacar en
        internet con páginas que no solo tengan un diseño atractivo, sino que
        también funcionen de forma impecable en cualquier dispositivo.
      </motion.p>

      <motion.p
        className="mt-4 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={3}
      >
        Hace poco finalicé un programa de desarrollo front-end y ahora me centro
        en escribir código limpio, diseñar maquetaciones atractivas y ofrecer
        experiencias de usuario que enganchen. Me encanta seguir aprendiendo y
        afrontar retos con curiosidad y creatividad.
      </motion.p>

      <motion.p
        className="mt-4 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={4}
      >
        Cuando no estoy programando, me encontrarás explorando tendencias de
        diseño, viendo tutoriales de desarrollo o imaginando mi próximo proyecto
        personal. ¡Construyamos algo increíble juntos!
      </motion.p>

      {/* Icons Row */}
      <motion.div
        className="flex gap-10 mt-12 text-4xl text-emerald-500"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{}}
        custom={5}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="transition-transform duration-300"
        >
          <FaReact />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="transition-transform duration-300"
        >
          <SiTailwindcss />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="transition-transform duration-300"
        >
          <SiFramer />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
