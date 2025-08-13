import "./App.css";
import ANavbar from "./components/Navbar";
import Hero from "./components/es/Hero";
import AboutMe from "./components/es/AboutMe";
import Newsletter from "./components/es/Newsletter";
import Footer from "./components/es/Footer";
import Testimonials from "./components/es/Testimonials";
import CookieConsentBanner from "./components/es/CookieConsentBanner";
import PricingCards from "./components/es/PricingCards";
import ProjectsiPhone from "./components/es/ProjectsiPhone";
import ProjectsLaptop from "./components/es/ProjectsLaptop";
//  snap-y snap-mandatory

function AppEs({ switchLanguage }) {
  return (
    <main
      className="relative h-screen overflow-y-scroll
     scroll-smooth "
    >
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>
      <div>
        {/* <ANavbar switchLanguage={switchLanguage} /> */}
        <Hero />
        <AboutMe />
        <ProjectsLaptop />
        <ProjectsiPhone />
        <PricingCards />
        <Testimonials />
        <Newsletter />
        <Footer />
        <CookieConsentBanner />
      </div>
    </main>
  );
}

export default AppEs;
