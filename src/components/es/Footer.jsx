import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "/src/assets/logo.png"; // Reemplaza con el logo de tu portafolio

const footerLinks = {
  Portafolio: [
    { name: "Inicio", href: "#" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ],
  Servicios: [
    { name: "Desarrollo Web", href: "#" },
    { name: "Animación UI", href: "#" },
    { name: "Diseño Responsivo", href: "#" },
    { name: "Proyectos Personalizados", href: "#" },
  ],
  Recursos: [
    { name: "Blog", href: "#" },
    { name: "Inspiraciones de Diseño", href: "#" },
    { name: "Fragmentos de Código", href: "#" },
    { name: "Plantillas Gratuitas", href: "#" },
  ],
  Contacto: [
    { name: "Trabaja Conmigo", href: "#contact" },
    { name: "Correo", href: "mailto:hello@yourdomain.com" },
    { name: "Boletín", href: "#" },
    { name: "Redes Sociales", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0c1d] to-[#111132] ">
      <div className="mx-auto w-full sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Columna de Marca */}
          <div className="px-4 lg:col-span-4">
            <div className="flex gap-2 items-center">
              <img
                src={logo}
                alt="María | Desarrolladora Front-End"
                className="h-20 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain"
              />
              <span className="text-sm text-emerald-400 uppercase font-extralight tracking-widest cursor-default">
                María Herrera
              </span>
            </div>

            <p className="text-slate-100 mb-6 md:w-3/4">
              Creo sitios web modernos, animados y totalmente responsivos,
              enfocados en código limpio, interfaces fluidas y experiencias
              atractivas para el usuario.
            </p>

            {/* Iconos Sociales */}
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-slate-500 hover:text-white transition-all duration-200"
              >
                <FaGithub className="size-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <FaLinkedinIn className="size-5" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <FaInstagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Navegación del Footer */}
          <div className="lg:col-span-8 pt-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg mb-4 uppercase text-emerald-500 font-bold">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-slate-100"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} María. Todos los derechos reservados.
            </p>
            <p className="text-slate-400 text-sm">
              Diseñado y desarrollado con ❤️ por María
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
