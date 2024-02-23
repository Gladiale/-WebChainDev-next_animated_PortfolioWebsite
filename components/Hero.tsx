import React from "react";
import HeroContent from "./HeroContent";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="relative flex item-center justify-center w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full bottom-[365px] z-[10] left-0 object-cover"
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full -bottom-[365px] left-0 z-[1] object-cover rotate-180"
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>

      <HeroContent />
      <Skills />
    </div>
  );
};

export default Hero;
