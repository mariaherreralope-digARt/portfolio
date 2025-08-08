import React from 'react'
import heroImage from "../assets/hero-image.png"
import { motion } from 'framer-motion';

const Hero = () => {
  return ( 
    <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* left col */}

      <div 
   
      className='w-full h-screen md:w-1/2 space-y-5 pt-8'
      >
        {/* star badge */}
        <motion.div 
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2,
              delay: 0.8
             }}
        className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-yellow-600 group-hover:text-red-800 text-lg group-hover:scale-110 transition-transform'>🌞</span>
          <span className='text-sm font-medium'>Live, Learn & Explore in Spain</span>
        </motion.div>

      <motion.h1 
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2,
              delay: 1
             }}
      className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight  relative'>
          Immerse yourself in the culture of <br />  
        <span className='text-yellow-600  inline-block text-balance'>
           Córdoba through Language<br />  
            
            </span><br />& Art
            <span className=' inline-block ml-2 animate-pulse'></span>💃<span ></span>
            {/* className='absolute bottom-0 left-0 w-full h-0.5 bg-red-800/40 text-balance' */}
      </motion.h1>
      <motion.p
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 1.2
            }}
        className=' text-gray-600 text-sm md:text-sm max-xl'>Learn Spanish while exploring flamenco, ceramics, guitar, photography, and more — all in the heart of Andalusia. Choose your stay: 1, 3, or 6 months.
      </motion.p>
      <motion.form onSubmit={(e) => e.preventDefault()} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2,
            delay: 1.5
             }}
      className='flex gap-3 max-w-md pt-8'>
        <input type="email" required
        placeholder='Email address'
        className='flex-1 px-6 py-2 border border-yellow-700 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all'/>
        <button type='submit' className='bg-red-700 text-white px-8 py-3 rounded-xl hover:bg-red-800 cursor-pointer transition-all hover:shadow-md hover:shadow-red-300 text-md'>→</button>
      </motion.form>
      </div>


      {/* right col */}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <motion.img 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={heroImage} alt="Cordoba" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
      </div>
    </section>
  )
}

export default Hero
