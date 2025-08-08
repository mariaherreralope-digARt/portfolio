import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import compras from '../assets/compras.png';
import donacion from '../assets/donacion.png';
import colabora from '../assets/colabora.png';
import backgroundImg from '../assets/logo-dibujo.png';

const OptionsCards = () => {
  const levels = [
  {
    icon: compras,  // puedes cambiarlo si tienes otro
    title: "Compra en nuestra tienda solidaria",
    description: "Cada producto vendido financia ayuda real para niños en tratamiento.",
    overlayColor: "rgba(241, 239, 253, 0.7)",  // suave, elegante
  },
  {
    icon: donacion,
    title: "Hazte donante mensual",
    description: "Únete a los “Constructores de Sueños”, una comunidad de personas que aportan desde 5€ al mes para mantener nuestros proyectos activos.",
    overlayColor: "rgba(254, 231, 231, 0.7)",  // cálido, festivo
  },
  {
    icon: colabora,
    title: " Invita a tu empresa a colaborar",
    description: "Tu empresa puede sumarse con donaciones mensuales, campañas solidarias o actividades deportivas.",
    overlayColor: "rgba(255, 243, 228, 0.7)",  // amigable, cercano
  },
];


  const levelsRef = useRef(null);
  const isInView = useInView(levelsRef, { once: true, margin: '-100px' });

  return (
    <section
    
      id='comoayudar'
      className='max-w-7xl mx-auto px-4 py-16 bg-cover bg-center relative opacity-90'
       style={{ backgroundImage: `url(${backgroundImg})` }} // <-- put your background image path here
    >
      {/* Heading */}
      <div className='text-center mb-16 mt-0 pt-0  file:mt-2 text-gray-700 drop-shadow-md'>
        <h2 className='text-3xl font-bold mb-4'>Hay muchas formas de sumar. ¿Cuál es la tuya?</h2>
        <p className="text-sm mt-1 text-gray-600/90">No hace falta hacer grandes cosas para cambiar vidas. A veces, un pequeño gesto es suficiente. <br />Aquí te dejamos formas sencillas y efectivas para colaborar con Fábrica de Sueños y Valores:</p>
      </div>
  {/* Numbered circle */}

      {/* <motion.div
  initial={{ opacity: 0, x: -200 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="absolute top-8 left-52  z-20"
>

  <div className="bg-yellow-600/70 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-md">
    1
  </div>
  
</motion.div> */}


      {/* Levels grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8' ref={levelsRef}>
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col text-center items-center justify-center p-6 rounded-xl overflow-hidden shadow-lg '
            style={{ backgroundColor: 'transparent' }} // so background is transparent but overlay shows
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Overlay */}
            <div
              className='absolute inset-0'
              style={{
                backgroundColor: level.overlayColor,
                backdropFilter: 'blur(8px)',  // optional: blur behind overlay for better contrast
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 0,
              }}
            />

            {/* Content above overlay */}
            <motion.div
              className='relative w-24 h-24 rounded-full mb-6 flex items-center justify-center z-10'
              style={{ backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4" }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
            >
              <motion.img
                src={level.icon}
                alt={`${level.title} icon`}
                className="w-20 h-20 object-contain"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 + 0.2 }}
              />
            </motion.div>

            <motion.h3
              className='text-2xl font-medium mb-3 relative z-10 text-gray-800 drop-shadow-md'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {level.title}
            </motion.h3>

            <motion.p
              className='text-gray-700 text-center relative z-10 drop-shadow-md'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            >
              {level.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className='text-center mt-12'>
        <motion.button
          className='hover:bg-red-800 text-white cursor-pointer px-8 py-3 rounded-full font-medium bg-red-700/70 transition-colors relative'
          whileHover={{ scale: 1.08, backgroundColor: '#b91c1c' }}
          transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
        >
          Contacta con nosotros
          <div className='absolute -z-10 w-full h-full rounded-full bg-red-800/20 blur-lg top-0'></div>
        </motion.button>
      </div>
    </section>
  );
};

export default OptionsCards;
