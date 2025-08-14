import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/assets/digARt-logo.png";
import ContactFormModalEN from "./en/ContactFormModal";
import ContactFormModalES from "./es/ContactFormModal";

const Navbar = ({ switchLanguage, currentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navLinks = [
    {
      href: "#about",
      label: currentLanguage === "en" ? "About Me" : "Sobre Mí",
    },
    {
      href: "#projects",
      label: currentLanguage === "en" ? "Projects" : "Proyectos",
    },
    {
      href: "#services",
      label: currentLanguage === "en" ? "Services" : "Servicios",
    },
    {
      href: "#testimonials",
      label: currentLanguage === "en" ? "Testimonials" : "Testimonios",
    },
  ];

  const navRefs = useRef(navLinks.map(() => null));
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <motion.nav className="top-0 right-0 left-0 bg-gradient-to-b from-[#111132] to-[#0c0c1d] z-10">
      <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 md:h-18 h-24">
        {/* Logo */}
        <div className="flex-shrink-0"></div>
        <a
          href="#home"
          onClick={() => setActiveLink("#home")}
          className="flex items-center"
        >
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.8, delay: 0.5 }}
            src={logo}
            alt="digARt Maria Herrera"
            className="h-32 md:px-10 px-4 relative z-10 "
          />
        </a>

        {/* Desktop nav links */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.8, delay: 0.5 }}
          onMouseLeave={() =>
            setCursorPosition((prev) => ({ ...prev, opacity: 0 }))
          }
          className="hidden md:flex relative w-fit rounded-3xl border-2 border-emerald-500 bg-transparent gap-3 z-20"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              ref={(el) => (navRefs.current[index] = el)}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              onMouseEnter={() => {
                const ref = navRefs.current[index];
                if (!ref) return;
                const { width } = ref.getBoundingClientRect();
                setCursorPosition({
                  left: ref.offsetLeft,
                  width,
                  opacity: 1,
                });
              }}
              className="relative z-20 block cursor-pointer uppercase text-emerald-500 mix-blend-difference px-3 py-1.5 md:px-5 md:py-3 font-light text-xs"
            >
              {link.label}
            </a>
          ))}

          {/* Sliding Cursor */}
          <motion.div
            animate={{
              left: cursorPosition.left,
              width: cursorPosition.width,
              opacity: cursorPosition.opacity,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="absolute z-10 h-5 md:h-10 bg-emerald-500 rounded-3xl"
          />
        </motion.div>

        {/* Languages */}
        <div className="flex items-center text-emerald-500 pr-8 text-sm gap-3">
          <button
            onClick={() => switchLanguage("en")}
            className={
              currentLanguage === "en"
                ? "font-bold text-yellow-400"
                : "font-light"
            }
          >
            EN
          </button>
          <button
            onClick={() => switchLanguage("es")}
            className={
              currentLanguage === "es"
                ? "font-bold text-yellow-400"
                : "font-light"
            }
          >
            ES
          </button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.7 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="text-white w-6 h-6" />
          ) : (
            <HiMenu className="text-white w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile menu items */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gradient-to-b from-slate-300/60 to-slate-300/30 border border-gray-100 py-4  text-center"
          >
            <div className="container mx-auto px-20  space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-yellow-500"
                      : "text-slate-100 hover:text-gray-900"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile Contact Button */}
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-yellow-500 text-white px-2 py-2.5 rounded-xl hover:bg-yellow-400 transition-all hover:shadow-sm hover:shadow-yellow-600"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isContactOpen &&
          (currentLanguage === "en" ? (
            <ContactFormModalEN
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            />
          ) : (
            <ContactFormModalES
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            />
          ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
