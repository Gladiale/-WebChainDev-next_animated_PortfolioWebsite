"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedNumbers from "./AnimatedNumbers";

const AboutMe = () => {
  const [isClicked, setIsClicked] = useState(false);

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const slideTextControls = useAnimation();

  const handleClick = () => {
    setIsClicked(true);
    textControls.start({ x: "-190%" });
    imageControls.start({ scale: 1.4, x: "30%" });
    slideTextControls.start({ scale: 1.2, x: "-60%" });
  };

  const handleBackClick = () => {
    const timeout = setTimeout(() => {
      setIsClicked(false);
    }, 1350);

    imageControls.start({ scale: 1, x: "0%" });
    textControls.start({ x: "0%" });
    slideTextControls.start({ scale: 1, x: "190%" });
  };

  return (
    <>
      <motion.div
        className="flex flex-col gap-6 pt-10 absolute left-72 max-w-[400px]"
        animate={textControls}
        transition={{ duration: 2 }}
      >
        <h1 className="text-6xl text-[#FFD700]">About me</h1>
        <p className="text-gray-200 text-[18px] max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          pariatur facere, modi repudiandae maiores est! Odit repudiandae
          recusandae ipsam voluptas voluptate, assumenda saepe atque, placeat
          laboriosam excepturi architecto dolor hic.
        </p>
        <button
          className="bg-[#FFD700] p-4 rounded-xl text-white"
          onClick={handleClick}
        >
          Learn more
        </button>
      </motion.div>
      <motion.img
        src="/coder.png"
        alt="coder"
        width={476}
        height={476}
        animate={imageControls}
        transition={{ duration: 2 }}
        className="absolute right-72"
      />
      <motion.div
        className="relative bg-gray-800 w-[600px] p-10 rounded-lg shadow-md absolute"
        animate={slideTextControls}
        transition={{ duration: 2 }}
        initial={{ x: "100vw" }}
      >
        <button
          onClick={handleBackClick}
          className="absolute right-6 text-white p-4"
          style={{ top: "40%" }}
        >
          &lt;- Back to info
        </button>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={10000} />}
            <p className="text-gray-300 text-lg font-semibold">
              Lines of code written
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={1000} />}
            <p className="text-gray-300 text-lg font-semibold">Hours of work</p>
          </div>

          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={250} />}
            <p className="text-gray-300 text-lg font-semibold">
              Client satisfied
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={25} />}
            <p className="text-gray-300 text-lg font-semibold">New employees</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
