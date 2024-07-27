import NavBar from "../../componnets/nav-bar/nav-bar";
import AboutUS from "../../sections/about-us/about-us";
import Founders from "../../sections/founders/founders";
import { HeroSection } from "../../sections/hero-section/hero-section";
import { OurValues } from "../../sections/our-values/our-values";
import Services from "../../sections/services/services";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col scroll-smooth">
      <NavBar />
      <HeroSection />
      <AboutUS />
      <OurValues />
      <Founders />
      <Services />
      <div id="" className="h-screen"></div>
    </div>
  );
};

export default LandingPage;
