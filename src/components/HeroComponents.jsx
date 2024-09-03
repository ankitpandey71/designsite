import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import Navbar from "./Navbar";

const HeroComponents = () => {
  return (
    <>
      <Navbar />
      <div className="relative pb-20 pt-0">
        {/* Spotlight Elements */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 h-[80vh] w-[20vw]" fill="purple" />
        <Spotlight className="top-28 h-[80vh] w-[20vw]" fill="blue" />

        {/* Hero Section */}
        <div className="h-[50rem] w-full relative flex items-center justify-center flex-col bg-gradient-to-r from-blue-900 via-purple-900 to-black-200">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent 20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 py-8">
            Crafting Digital Experiences with Precision and Passion
          </p>
          <TextGenerateEffect
            className="z-10 text-center text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            words="Bringing Ideas to Life in a Digital World"
          />
          <a href="#about" className="z-10 mt-8">
            <ShimmerButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroComponents;
