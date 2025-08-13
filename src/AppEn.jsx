import "./App.css";
import ANavbar from "./components/Navbar";
import Hero from "./components/en/Hero";
import AboutMe from "./components/en/AboutMe";
import Newsletter from "./components/en/Newsletter";
import Footer from "./components/en/Footer";
import Testimonials from "./components/en/Testimonials";
import CookieConsentBanner from "./components/en/CookieConsentBanner";
import PricingCards from "./components/en/PricingCards";
import ProjectsiPhone from "./components/en/ProjectsiPhone";
import ProjectsLaptop from "./components/en/ProjectsLaptop";
//  snap-y snap-mandatory

function AppEn({ switchLanguage }) {
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

export default AppEn;
