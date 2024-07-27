import { Meteors } from "../../componnets/meteors/meteors";

const AboutUS = () => {
  return (
    <div
      id="about-us"
      className="z-10 flex flex-col min-h-[16rem] items-center justify-center bg-white"
    >
      <div className="w-full relative h-screen">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full overflow-hidden flex flex-col justify-center items-start">
          <div className=" max-w-screen-xl mx-auto">
            <div className="text-center text-white py-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-full">
              About us
            </div>

            <p className="font-normal text-xl text-slate-500 m-8 md:mx-4 relative z-50">
              Smridhi Tech was founded in 2023 by Deepak Luthra, an industry
              veteran having more than 29 years of experience and having worked
              with Companies like IBM for more than 16 years along with other ex
              IBMers to support business to achieve their goal through
              technology by embedding right technology from the very beginning
              and taking competitive advantages.
              <br />
              <br />
              As education is our fundamental right, Deepak is committed toward
              united nation sustainability development goals of Quality
              education. Thus focusing on providing opportunities to grow for
              working professionals and to college students who aspire to join
              the success bandwagon.
            </p>

            <Meteors number={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
