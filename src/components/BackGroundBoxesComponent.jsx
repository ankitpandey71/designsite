"use client";
import React from "react";
import { Boxes } from "./ui/BackGroundBoxes";
import { cn } from "../lib/utils";
import ShimmerButton from "./ui/ShimmerButton";

export function BackgroundBoxesComponent() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-xl text-center w-2/4 text-white relative z-20"
        )}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        consequatur autem optio similique dicta.
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        recusandae culpa dolores minima corrupti eos vitae
      </p>
      <a href="#about" className="z-10 mt-6">
        <ShimmerButton />
      </a>
    </div>
  );
}
