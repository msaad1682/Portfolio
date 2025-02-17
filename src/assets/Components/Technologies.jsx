import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3 },
  },
};

const Technologies = () => {
  return (
    <motion.div
      className="border-b border-neutral-800 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="my-20 text-center text-4xl"
        variants={iconVariants}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        Technologies
      </motion.h1>

      {/* Icons */}
      <div className="my-20 text-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Individual Technology Icon */}
          {[ // List of icons with styling
            { Icon: RiReactjsLine, color: "text-cyan-400" },
            { Icon: TbBrandNextjs, color: "" },
            // { Icon: SiMongodb, color: "text-green-700" },
            // { Icon: DiRedis, color: "text-red-900" },
            // { Icon: FaNodeJs, color: "text-green-600" },
            { Icon: BiLogoPostgresql, color: "text-sky-800" },
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-6 shadow-md"
              variants={iconVariants}
              whileHover="hover"
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
