import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header
      id="sticky-banner"
      tabIndex={-1}
      className="fixed top-0 start-0 z-50 flex justify-between w-full p-4"
    >
      <div className="mx-auto mt-2 flex rounded-2xl border border-solid border-gray-700 bg-gray-800 p-1 shadow-xl">
        <div className="h-9 w-10 aspect-square bg-red-200 rounded-xl"></div>
        <motion.div
          initial={{ width: 0, marginLeft: 0, paddingRight: 0 }}
          animate={{ width: "auto", marginLeft: "16px", paddingRight: "8px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex h-9 items-center gap-4 text-white text-md overflow-hidden"
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
          <a href="#our-services" className=" text-nowrap">
            Our Services
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;
