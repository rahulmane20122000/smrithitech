import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header
      id="sticky-banner"
      className="fixed w-full top-0 start-0 max-w-screen z-50 flex items-center justify-between md:p-4"
    >
      <div className="md:mx-auto max-w-full mt-2 grid grid-cols-[auto_1fr] rounded-2xl border border-solid border-gray-700 bg-gray-800 p-1 shadow-xl">
        <div className="md:h-9 w-10 aspect-square bg-red-200 rounded-xl"></div>
        <motion.div
          initial={{ width: 0, marginLeft: 0 }}
          animate={{
            width: "auto",
            marginLeft: "16px",
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex max-w-full md:h-9 items-center flex-wrap md:flex-nowrap gap-4 text-white text-md overflow-hidden"
        >
          <a href="#home" className=" text-nowrap">
            Home
          </a>
          <a href="#about-us" className=" text-nowrap">
            About US
          </a>
          <a href="#our-values" className=" text-nowrap">
            Values
          </a>
          <a href="#our-founder" className=" text-nowrap">
            Team
          </a>
          <a href="#our-services" className=" text-nowrap mr-3">
            Our Services
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;
