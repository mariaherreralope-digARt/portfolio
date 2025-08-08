import { motion } from 'framer-motion';

import heroImage from "../assets/hero-image.png";


const Hero = () => {
  return ( <section
  id='inicio'
  className='relative w-full min-h-[600px] flex flex-col  md:flex-row justify-between items-center pt-12 pb-6 bg-cover bg-no-repeat bg-center'
>
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

{/* Dark Overlay Only on Background */}
<div className="absolute inset-0 bg-gradient-to-b from-red-200/70 to-transparent z-0"></div>
    </div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">

    
    <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">

  {/* LEFT: Star badge aligned left */}
  {/* <motion.div 
    initial={{ opacity: 0, x: -150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 0.8 }}
    className='self-start mb-12'
  >
    <div className='flex items-center gap-2 bg-gray-50 px-8 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
      <span className='text-yellow-600 group-hover:text-red-800 text-lg group-hover:scale-110 transition-transform'>🌞</span>
      <span className='text-sm font-medium'>Live, Learn & Explore in Spain</span>
    </div>
  </motion.div> */}

  {/* CENTER: Headline + Paragraph */}
  <div className='self-center text-center mt-20 '>
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className='text-3xl text-white md:text-4xl lg:text-5xl font-bold leading-relaxed'
    >
      <span className='text-emerald-300 sm:text uppercase'>
        Fábrica de Sueños y Valores
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className='text-yellow-500 text-sm'
    >
      Cada producto que compras ayuda a un niño con cáncer a recibir apoyo y a seguir soñando. 
    </motion.p>
  </div>

  {/* RIGHT: Email Form */}
  <motion.form 
    onSubmit={(e) => e.preventDefault()} 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 1.5 }}
    className='self-center w-full md:w-auto flex gap-1'
  >
    <input 
      type="email" 
      required
      placeholder='Dirección de correo electrónico'
      className='w-[350px] flex-1 px-6 py-2 border border-yellow-500 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-yellow-100 transition-all'
    />
    <button 
      type='submit' 
      className='bg-emerald-500 text-white px-6 py-2 rounded-xl hover:bg-emerald-600 cursor-pointer transition-all hover:shadow-md hover:shadow-emerald-300 text-md'
    >
      →
    </button>
  </motion.form>

</div>


    {/* Right column (placeholder) */}
    <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'></div>
  </div>
</section>

  );
};

export default Hero;

