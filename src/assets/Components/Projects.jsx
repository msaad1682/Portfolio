import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const hoverEffect = {
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-12 px-4 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      {/* Title */}
      <motion.h1
        className="my-10 text-4xl font-bold text-center text-neutral-200"
        variants={fadeIn("down", 0.1)}
        whileHover={{
          scale: 1.1,
          color: "#9333EA", // Purple shade
          transition: { duration: 0.4 },
        }}
      >
        Projects
      </motion.h1>

      {/* Project List */}
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center  lg:flex-row lg:items-start lg:text-left"
            variants={fadeIn("up", index * 0.2)}
          >
            {/* Project Image */}
            <motion.div
              className=" lg:w-1/4 mb-6 lg:mb-0 lg:mr-8"
              whileHover={hoverEffect.hover}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Project Details */}
            <div className="w-full max-w-xl">
              <motion.h5
                className="mb-2 text-xl font-semibold text-neutral-100"
                variants={fadeIn("right", 0.3)}
              >
                {project.title}
              </motion.h5>
              <motion.p
                className="mb-4 text-neutral-400"
                variants={fadeIn("right", 0.4)}
              >
                {project.description}
              </motion.p>

              {/* Technologies Tags */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 lg:justify-start"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.2 },
                  },
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-200 shadow-sm"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#4C1D95", // Dark purple shade
                      color: "#fff",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
