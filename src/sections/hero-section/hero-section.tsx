import AnimatedGradientText from "../../componnets/animated-gradient-text/animated-gradient-text";
import BoxReveal from "../../componnets/box-reveal/box-reveal";
import { BackgroundGradientAnimation } from "../../componnets/movable-gradient/movable-gradient";
import { cn } from "../../lib/utils";

export function HeroSection() {
  return (
    <div
      id="home"
      className="relative flex h-screen 
      w-full flex-col
      justify-center
      overflow-hidden 
      bg-background
     "
    >
      <div className="max-w-screen-xl w-full px-10 lg:px-6 mx-auto z-10">
        <div className="w-full grid md:grid-cols-2 text-white">
          <div className="h-full w-full items-center justify-center pt-8">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold ">
                SmridhiTech<span className="text-[#e6823b]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                Our Mission is to empower business through Innovative
                <br />
                <span className="md:text-[#e6823b] font-bold text-white">
                  TECHNOLOGY
                </span>{" "}
                solution. Our Commitment is to create seamless
                <br /> digital{" "}
                <span className="md:text-[#e6823b] font-bold text-white">
                  EXPERIENCE
                </span>{" "}
                for our clients, enabling them to achieve their goals and
                transform their industries.
              </h2>
            </BoxReveal>

            <div className="mt-8">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <AnimatedGradientText>
                  🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline text-white bg-[length:var(--bg-size)_100%] bg-clip-text`
                    )}
                    // className={cn(
                    //   `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#7a1cde] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    // )}
                  >
                    Connect With Us
                  </span>
                  <span className="material-symbols-outlined text-md">
                    chevron_right
                  </span>
                </AnimatedGradientText>
              </BoxReveal>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <BackgroundGradientAnimation containerClassName="z-1 absolute right-0 w-full " />
    </div>
  );
}
