import EdTechServices from "../ed-tech-services/ed-tech-services";

const Services = () => {
  return (
    <div id="our-services" className="min-h-screen pt-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold underline decoration-wavy decoration-teal-400 mb-2">
          Our Services
        </div>
        <EdTechServices />
      </div>
    </div>
  );
};

export default Services;
