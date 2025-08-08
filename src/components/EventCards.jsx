import { motion } from 'framer-motion';

import carreras from '../assets/carreras.png';
import dibujo from '../assets/dibujo.png';
import deporteinfantil from '../assets/deporte-infantil.png';

const trips = [
  {
    image: carreras,
    title: "Carreras Solidarias",
    description:
     "🏃‍♂️“Corre por un Sueño” – Septiembre",
  },
  {
    image: dibujo,
    title: "Talleres de dibujo y pintura",
    description:
     "🎨 Taller de Dibujo Solidario – Octubre",
  },
  {
    image: deporteinfantil,
    title: "Actividades deportivas infantiles",
    description:
    "⚽ Partido de Fútbol Benéfico – Noviembre",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const EventCards = () => {
  return (
    <motion.section
      id='eventos'
      className='max-w-7xl mx-auto px-4 py-16'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.div
        className='text-center mb-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-3xl font-bold mb-4'>¡Súmate a la alegría de ayudar!</h2>
        <p className='text-sm text-gray-600'>
       Organizamos actividades donde la ayuda se convierte en juego, deporte, comunidad. Participa, corre, pinta, ríe, y colabora.
        </p>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {trips.map((trip, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group'
            custom={index}
            variants={cardVariants}
          >
            <div className='h-56 w-full overflow-hidden'>
              <img
                src={trip.image}
                alt={trip.title}
                className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-lime-800 mb-3'>{trip.title}</h3>
              <p className='text-gray-600 text-sm'>{trip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      {/* <motion.div
        className='text-center mt-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <button className='hover:bg-red-800 text-white cursor-pointer px-8 py-3 rounded-full font-medium bg-red-700/70 transition-colors relative'>
          Join Us Now
          <div className='absolute -z-10 w-full h-full rounded-full bg-red-800/20 blur-lg top-0'></div>
        </button>
      </motion.div> */}
    </motion.section>
  );
};

export default EventCards;
