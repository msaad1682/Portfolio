import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import aboutImg from "../../assets/about.jpg";
import { ABOUT_TEXT } from "../../constants"; // Ensure this is defined

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <motion.div
      className="border-b border-neutral-700 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="my-20 text-center text-4xl"
        variants={textVariants}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={imageVariants}
        >
          <div className="flex items-start justify-center">
            <motion.img
              className="rounded-2xl shadow-lg"
              src={aboutImg}
              alt="About"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.5 },
              }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={textVariants}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-gray-300 tracking-wide leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
