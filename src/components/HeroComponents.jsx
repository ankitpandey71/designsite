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
        <div className="relative flex flex-col items-center justify-center h-[50rem] bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2]">
          {/* Masking effect for background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          {/* Headline */}
          <h2 className="z-10 text-xs tracking-widest text-center uppercase text-blue-100 max-w-xs">
            Dynamic Web Magic with Next.js
          </h2>

          {/* Animated Text Effect */}
          <TextGenerateEffect
            className="z-10 text-center text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white"
            words="Transforming Concepts into Seamless Experiences"
          />

          {/* Shimmer Button */}
          <a href="#about" className="z-10 mt-6">
            <ShimmerButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroComponents;
