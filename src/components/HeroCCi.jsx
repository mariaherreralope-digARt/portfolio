import React from 'react';
import heroImage from "../assets/hero-image.png";
import { motion } from 'framer-motion';

const Hero = () => {
  return ( <section
  id='home'
  className='relative w-full min-h-[600px] flex flex-col md:flex-row justify-between items-center pt-12 pb-6 bg-cover bg-no-repeat bg-center'
>
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Dark Overlay Only on Background */}
      <div className="w-full h-full bg-black bg-opacity-40"></div>
    </div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">

    
    <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">

  {/* LEFT: Star badge aligned left */}
  <motion.div 
    initial={{ opacity: 0, x: -150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 0.8 }}
    className='self-start mb-12'
  >
    <div className='flex items-center gap-2 bg-gray-50 px-8 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
      <span className='text-yellow-600 group-hover:text-red-800 text-lg group-hover:scale-110 transition-transform'>🌞</span>
      <span className='text-sm font-medium'>Live, Learn & Explore in Spain</span>
    </div>
  </motion.div>

  {/* CENTER: Headline + Paragraph */}
  <div className='self-center text-center space-y-4 max-w-2xl'>
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className='text-2xl text-white md:text-3xl lg:text-4xl font-bold leading-tight'
    >
      <span className='text-yellow-400'>
        Immerse yourself in the culture of Córdoba through Language & Art
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className='text-gray-200 text-sm'
    >
      Learn Spanish while exploring flamenco, ceramics, guitar, photography, and more — all in the heart of Andalusia. Choose your stay: 1, 3, or 6 months.
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
      placeholder='Email address'
      className='w-[350px] flex-1 px-6 py-2 border border-yellow-700 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all'
    />
    <button 
      type='submit' 
      className='bg-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-800 cursor-pointer transition-all hover:shadow-md hover:shadow-red-300 text-md'
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

