import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";

const HeroComponents = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />

      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="h-[50rem] w-full dark:bg-black bg-white flex-col  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Dynamic Web Magic with Next.js
        </h2>
        <TextGenerateEffect
          className="text-center text-[48px] md:text-5xl lg:text-6xl"
          words="Transforming Concept into seamless Experiences"
        />
        <a href="#about">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Shimmer
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroComponents;
