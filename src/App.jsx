import "./App.css";
import ANavbar from "./components/ANavbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import IconSlideAnimation from "./components/IconSlideAnimation";
// import StayOptions from './components/StayOptions'
import OptionsCards from "./components/OptionsCards";
import CardsCollection from "./components/CardsCollection";
import ImageSlider from "./components/ImageSlider";
// import JoinCommunity from './components/JoinCommunity'
import EventCards from "./components/EventCards";
// import PricingSection from './components/PricingSection'
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CookieConsentBanner from "./components/CookieConsentBanner";
import PricingCards from "./components/PricingCards";
//  snap-y snap-mandatory
function App() {
  return (
    <main
      className="relative h-screen overflow-y-scroll
     scroll-smooth "
    >
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>
      <div>
        <ANavbar />
        <Hero />
        {/* <IconSlideAnimation/>
      <ImageSlider/> */}
        {/* <EventCards/> */}
        <AboutMe />
        <PricingCards/>
        {/* <StayOptions/> */}
        {/* <OptionsCards/>
      <CardsCollection/>
      <Testimonials/>
      <Newsletter/>
      <Footer/> */}
        <CookieConsentBanner />
      </div>
    </main>
  );
}

export default App;
