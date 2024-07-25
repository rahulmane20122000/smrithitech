import NavBar from "../../componnets/nav-bar/nav-bar";
import AboutUS from "../../sections/about-us/about-us";
import { HeroSection } from "../../sections/hero-section/hero-section";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col scroll-smooth">
      <NavBar />
      <HeroSection />
      <AboutUS />
      <div id="our-values" className="h-screen"></div>
    </div>
  );
};

export default LandingPage;
