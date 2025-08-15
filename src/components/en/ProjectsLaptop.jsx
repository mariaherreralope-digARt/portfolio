import { useState } from "react";
import { motion } from "framer-motion";
import laptopMockup from "/src/assets/laptopMockup.png";
import laptopSite from "/src/assets/laptopSite.png";
import ContactModal from "./ContactFormModal";

const ProjectsLaptop = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="relative w-full md:h-screen flex  bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-6 md:px-16 overflow-hidden "
    >
      {/* Content Wrapper */}
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* LEFT COLUMN */}
        <motion.div
          className=" w-full md:w-1/2 flex justify-center  pt-7 md:pt-72  "
          variants={slideInRight}
        >
          <div className="relative w-[500px] h-[600px] mx-auto overflow-hidden">
            <img src={laptopMockup} alt="Animated Sites" className=" z-10 " />
            <div
              className="absolute top-[20px] left-[124px] w-[245px] md:h-[155px] h-[165px] overflow-y-scroll rounded-[5px] scrollbar-hide"
              // style={{
              //   WebkitMaskImage:
              //     "linear-gradient(to bottom, black 95%, transparent 100%)", // optional fade mask
              //   maskImage:
              //     "linear-gradient(to bottom, black 95%, transparent 100%)",
              // }}
            >
              <img
                src={laptopSite}
                alt="Mobile site screenshot"
                className="-pr-4 bg-slate-400
                 relative  object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
        </motion.div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 px-10">
          <motion.h2
            className="text-lg text-emerald-400  uppercase font-extralight tracking-widest cursor-default"
            variants={fadeUp}
          >
            Modern Animated Websites
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-200 to-slate-600  bg-clip-text text-transparent cursor-default"
            variants={fadeUp}
          >
            Desktop View
          </motion.h1>

          <motion.p
            className="text-yellow-300 text-base md:text-lg cursor-default"
            variants={fadeUp}
          >
            Websites designed for a full desktop experience, featuring smooth
            animations, thoughtful layouts, and an engaging user interface.
            Built with React & Framer Motion for performance and style.
          </motion.p>

          <motion.button
            onClick={openContactForm}
            className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-3xl transition-all duration-300 shadow hover:shadow-lg"
            variants={fadeUp}
          >
            Let’s Work Together
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
        ></motion.div>
      </motion.div>

      {/* Render modal when open */}
      <ContactModal isOpen={contactFormOpen} onClose={closeContactForm} />
    </section>
  );
};

export default ProjectsLaptop;
