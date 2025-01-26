import React from 'react';
import { HERO_CONTENT } from '../../constants'; // Ensure HERO_CONTENT is defined
import profile from '../../assets/KevinRushProfile.png';
import { motion } from "framer-motion"; // Correct import

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="flex flex-col px-12"
          >
            <motion.h1
              variants={container(0)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="font-thin text-4xl tracking-tight lg:mt-16 lg:text-5xl"
            >
              Muhammad Saad
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-500 bg-clip-text text-2xl text-transparent"
            >
              FULL STACK DEVELOPER
            </motion.span>
            <motion.p
              variants={container(1)}
              whileHover={{
                scale: 1.05,
                opacity: 0.9,
                transition: { duration: 0.3 },
              }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Profile"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
