import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { EXPERIENCES } from "../../constants"; // Make sure EXPERIENCES is defined

// Define motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="my-20 text-center text-4xl"
        variants={childVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        Experience
      </motion.h1>

      {/* Experience Items */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={childVariants}
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
            </div>

            {/* Role & Description Section */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#4C1D95",
                      color: "#fff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
