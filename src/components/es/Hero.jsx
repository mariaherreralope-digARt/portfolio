import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "/src/assets/hero-image1.png"; 
import ContactModal from "./ContactFormModal";

const Hero = () => {

  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};


  return (
    <section
      id="home"
      className="relative w-full md:h-screen flex  bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-6 md:px-16 overflow-hidden "
    >
 
      <motion.div
        className="max-w-7xl  w-full flex flex-col md:flex-row items-center justify-between z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN */}
        <div className="w-full  md:w-1/2 text-white text-center md:text-left space-y-6 pt-7 md:pt-0 px-5">
          <motion.h2
            className="text-lg text-emerald-400 uppercase font-extralight tracking-widest cursor-default"
            variants={fadeUp}
          >
            Maria Herrera
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-slate-200 to-slate-600  bg-clip-text text-transparent cursor-default"
            variants={fadeUp}
          >
            Desarrolladora Front-End <br />y Animadora UI.
          </motion.h1>

          <motion.p
            className="text-yellow-400 text-base md:text-lg cursor-default"
            variants={fadeUp}
          >
            Creo sitios web modernos, animados y totalmente adaptables con React
            y Framer Motion.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-3xl transition-all duration-300 shadow hover:shadow-lg"
            variants={fadeUp}
          >
            Trabajemos juntos
          </motion.button>
        </div>
        <motion.div
          className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#fdf4f418] w-max font-bold pointer-events-none z-0 pb-20"
          initial={{ x: 850, opacity: 0 }}
          whileInView={{
            x: "-220%",
            opacity: 1,
            transition: {
              opacity: { delay: 2, duration: 0.5 }, // delay before fade in
              x: {
                delay: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
                duration: 150,
              }, // delay start sliding after fade in
            },
          }}
        >
          Creadora de ProJectos
        </motion.div>
        {/* RIGHT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 mt-3 md:mt-3 flex justify-center md:justify-end pt-7 md:pt-0"
          variants={slideInRight}
        >
          <img
            src={heroImage}
            alt="Maria Herrera"
            className="w-[300px] md:w-[450px] object-contain drop-shadow-xl "
          />
        </motion.div>
      </motion.div>

       {/* Render modal when open */}
<ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />

    </section>
  );
};

export default Hero;
