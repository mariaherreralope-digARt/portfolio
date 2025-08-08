import { useState } from 'react';

import { FiX } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/fabrica-logo1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const navLinks = [

    { href: "#nuestrahistoria", label: "About Me" },
    { href: "#eventos", label: "Projects" },
    { href: "#comoayudar", label: "Services" },
    // { href: "#tiendasolidaria", label: "Tienda solidarias" },
    { href: "#testimonios", label: "Testimonials" },
    

  ];

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
    {/* Franja Navbar */}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="top-0 right-0 left-0 backdrop-blur/-sm bg-gradient-to-br from-[#0c0c1d] to-[#111132] border-gray-10 shadow-sm z-50"
      >
      
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 md:h-16 h-16">
    {/* Logo */}
          <a href="#inicio" onClick={() => setActiveLink("#inicio")} className="flex items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.8, delay: 0.5 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 10,
          //   damping: 25,
          //   delay: 0.3,
          //   duration: 0.8,
          // }}
          src={logo}
          alt="Fabrica de Sueños y Valores Logo"
          className="h-40 rounded-2xl relative z-10 "
  />
</a>


    {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5 + index * 0.1,
                }}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm uppercase font-bold relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-600 after:transition-all ${
                  activeLink === link.href
                    ? "text-gray-600 after:w-full"
                    : "text-emerald-500 hover:text-yellow-600 after:w-0"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Get in touch button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="hidden md:block bg-yellow-500 text-sm text-white px-6 py-2.5 rounded-full hover:bg-yellow-600 font-semibold uppercase transition-all hover:shadow-sm hover:shadow-yellow-600"
          >
            CONTACTA
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
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
              className="md:hidden bg-gray-300 border-t border-gray-100 py-4"
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
                      activeLink === link.href ? "text-yellow-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openContactForm();
                  }}
                  className="w-full bg-yellow-600 text-white px-6 py-2.5 rounded-lg hover:bg-yellow-700 font-medium transition-all hover:shadow-lg hover:shadow-yellow-100"
                >
                  Contactanos
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
             initial={{ scale: 0.8, opacity:0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                  duration: 0.8
                }}

            className="bg-white dark:bg-emerald-500 rounded-xl shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-100">Contacta con Nosotros</h1>
                <button onClick={closeContactForm} aria-label="Close contact form">
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
<input type="hidden" name="_autoresponse" value="Gracias por tu mensaje. Nos pondremos en contacto pronto." />


                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu Nombre"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu Correo Electrónico"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="¿Cómo podemos ayudarte?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"

                  />           
                </div>
     <motion.button className='w-full px-4 py-2 text-white bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-yellow-500/50'>Enviar Mensaje

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