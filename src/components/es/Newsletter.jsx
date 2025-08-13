import { HiArrowRight } from "react-icons/hi2";

const Newsletter = () => {
  return (
    <section
      className="bg-gradient-to-b
        from-[#111132] to-[#0c0c1d] mx-auto px-4 sm:px-6 lg:px-8py-5"
    >
      <div className="bg-gradient-to-b from-slate-100/40 via-transparent to-slate-100/40 border-2 border-emerald-500 rounded-3xl overflow-hidden">
        <div className="relative md:px-16 py-16 px-6 md:py-15">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                ¡Únete a mis Tips de Desarrollo!
              </h2>
              <p className="text-purple-100 text-sm sm:text-base">
                Recibe consejos prácticos sobre diseño web, desarrollo front-end
                y animaciones, directamente en tu correo. Nada de spam, solo
                cosas útiles y fáciles de aplicar.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Escribe tu correo aquí"
                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-3xl sm:rounded-3xl sm:rounded-r-none focus:outline-none"
              />
              <button className="w-full sm:w-auto cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-3xl flex items-center gap-2">
                <span>Suscribir</span>
                <HiArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
