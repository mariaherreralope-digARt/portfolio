import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

import testimonial1 from "/src/assets/testimonial1.png";
import testimonial2 from "/src/assets/testimonial2.png";
import testimonial3 from "/src/assets/testimonial3.png";
import testimonial4 from "/src/assets/testimonial4.png";
import testimonial5 from "/src/assets/testimonial5.png";

const testimonials = [
  {
    id: 1,
    name: " – Laura P., small business owner",
    image: testimonial1,
    text: "María transformed my outdated website into something fresh, modern, and easy to use. My clients love it!",
  },
  {
    id: 2,
    name: "– Daniel R., freelance photographer",
    image: testimonial2,
    text: "She really listened to my ideas and turned them into a site that reflects my brand perfectly. Highly recommended.",
  },
  {
    id: 3,
    name: " – Sofia M., event planner",
    image: testimonial3,
    text: "Fast, creative, and detail-oriented — María made the process so easy from start to finish.",
  },

  {
    id: 4,
    name: " – Carlos T., marketing consultant",
    image: testimonial4,
    text: "The animations make my site feel alive, and it loads so quickly on both desktop and mobile.",
  },
  {
    id: 5,
    name: " – Elena G., boutique owner",
    image: testimonial5,
    text: "I finally have a website that not only looks great but actually helps me get more customers.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonios"
      className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-[#0c0c1d] to-[#111132] "
    >
      <motion.div className="text-center mb-12">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-300">
          Client Testimonials
        </motion.h2>
        <motion.p className="text-slate-100">
          A few messages from amazing clients who trusted me to bring their
          ideas to life.
        </motion.p>
      </motion.div>
      {/* Swiper cards */}
      <motion.div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center bg-gradient-to-b from-transparent via-emerald-500/30 to-emerald-500/50 border-2 border-yellow-400/50  p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div className="w-24 h-24 mx-auto mt-4 mb-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover "
                  />
                </motion.div>
                <motion.div className="flex justify-center mb-2">
                  {/* {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                     
                      className="text-yellow-600"
                    >
                      ★
                    </motion.span>
                  ))} */}
                </motion.div>
                <motion.h3 className="font-semibold text-slate-300 text-xl mb-3">
                  {testimonial.name}
                </motion.h3>
                <motion.p className="text-slate-100">
                  {" "}
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full text-yellow-400 flex items-center justify-center hover:bg-emerald-400 bg-emerald-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full text-yellow-400 flex items-center justify-center hover:bg-emerald-400 bg-emerald-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
