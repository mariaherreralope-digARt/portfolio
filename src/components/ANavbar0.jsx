import { useState, useRef } from "react";

import { FiX } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/fabrica-logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <motion.nav
        className="top-0 right-0 left-0 bg-gradient-to-b
        from-[#111132] to-[#0c0c1d]  z-10"
      >
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 md:h-18 h-24">
          {/* Logo */}

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
              className="h-40 px-10 relative z-10 "
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
            className="hidden md:flex relative w-fit rounded-3xl border-2 border-emerald-500 bg-transparent  gap-3 z-20"
          >
            {navLinks.map((link, index) => {
              const ref = useRef(null);

              return (
                <a
                  key={index}
                  ref={ref}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  onMouseEnter={() => {
                    if (!ref.current) return;
                    const { width } = ref.current.getBoundingClientRect();

                    setCursorPosition({
                      left: ref.current.offsetLeft,
                      width,
                      opacity: 1,
                    });
                  }}
                  className={`relative z-20 block cursor-pointer
                  uppercase text-emerald-500 mix-blend-difference 
                  px-3 py-1.5 md:px-5 md:py-3 
                  font-light text-xs `}
                >
                  {link.label}
                </a>
              );
            })}
            {/* Sliding Cursor */}

            <motion.div
              animate={{
                left: cursorPosition.left,
                width: cursorPosition.width,
                opacity: cursorPosition.opacity,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="absolute z-10 
              h-5 md:h-10 
              bg-emerald-500 rounded-3xl"
            />
          </motion.div>
          {/* Languages */}
          <div className="md:flex hidden items-center text-emerald-500 pr-8 text-sm gap-3">
            <a
              href="#home"
              onClick={() => setActiveLink("#home")}
              className={
                activeLink === "#home"
                  ? "font-bold text-yellow-400"
                  : "font-light"
              }
            >
              EN
            </a>

            <a
              href="#inicio"
              onClick={() => setActiveLink("#inicio")}
              className={
                activeLink === "#inicio"
                  ? "font-bold text-yellow-400"
                  : "font-light"
              }
            >
              ES
            </a>
          </div>

          {/* Contact button */}
          {/* <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="hidden md:block bg-yellow-500 text-sm text-white px-6 py-2.5 rounded-3xl hover:bg-yellow-400 font-semibold uppercase transition-all hover:shadow-sm hover:shadow-yellow-600 z-20"
          >
            CONTACTA
          </motion.button> */}

          {/* Open Mobile menu button */}
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
              className="md:hidden bg-gray-300 border-t border-gray-100 py-4 text-center"
            >
              <div className="container mx-auto px-20 space-y-3">
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
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                {/* Mobile Contact Button */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openContactForm();
                  }}
                  className="w-full bg-yellow-500 text-white px-2 py-2.5 rounded-3xl hover:bg-yellow-400 font-semibold transition-all hover:shadow-sm hover:shadow-yellow-600"
                >
                  Let's Work Together
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-emerald-500 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-100">
                  Let's Work Together
                </h1>
                <button
                  onClick={closeContactForm}
                  aria-label="Close contact form"
                >
                  <FiX className="w-6 h-6 text-gray-00 dark:text-gray-100" />
                </button>
              </div>

              {/* Input Forms */}
              <form
                action="https://formsubmit.co/mariaherreralope@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for your message. I'll get back to you soon."
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-400 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <motion.button className="w-full px-4 py-2 text-white bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-sm hover:shadow-yellow-400">
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
