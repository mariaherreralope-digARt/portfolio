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
        viewport={{ once: true }}
        custom={0}
      >
        👋{" "}
        <span className="bg-gradient-to-r from-slate-600 to-slate-200  bg-clip-text text-transparent tracking-tight cursor-default">
          Hi! I’m María,
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-white mt-4 max-w-3xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        a passionate front-end developer who loves turning ideas into smooth,
        modern websites.
      </motion.h2>

      <motion.p
        className="mt-8 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        I specialize in building responsive, fast-loading, and beautifully
        animated interfaces using React, Tailwind CSS, and Framer Motion. My
        goal is to help small businesses, creatives, and entrepreneurs stand out
        online with websites that not only look great — but work perfectly on
        any device.
      </motion.p>

      <motion.p
        className="mt-4 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        I recently completed a front-end developer program and now focus on
        creating clean code, eye-catching layouts, and engaging user
        experiences. I’m always learning and improving, and I enjoy solving
        challenges with curiosity and creativity.
      </motion.p>

      <motion.p
        className="mt-4 text-white max-w-2xl cursor-default"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        When I’m not coding, you’ll find me exploring design trends, watching
        dev tutorials, or dreaming up my next side project. Let’s build
        something great together!
      </motion.p>

      {/* Icons Row */}
      <motion.div
        className="flex gap-10 mt-12 text-4xl text-emerald-500"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
