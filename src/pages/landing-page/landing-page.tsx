import NavBar from "../../componnets/nav-bar/nav-bar";
import AboutUS from "../../sections/about-us/about-us";
import { HeroSection } from "../../sections/hero-section/hero-section";
import { OurValues } from "../../sections/our-values/our-values";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col scroll-smooth">
      <NavBar />
      <HeroSection />
      <AboutUS />
      <OurValues />
      <div id="" className="h-screen"></div>
    </div>
  );
};

export default LandingPage;
