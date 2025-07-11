"use client";
import Image from "next/image";

const Decorations = () => {
  return (
    <>
        {/* Pink Flower Top Left */}
        <div className="absolute top-[8%] left-[3%] w-10 h-10 lg:w-14 lg:h-14 animate-dwindle z-10">
            <Image src="/assets/images/svgs/pinkflow.svg" alt="Pink Flower" fill className="object-contain" />
        </div>

        {/* yellow Flow - bottom right */}
        <div className="absolute bottom-[5%] right-[6%] w-14 h-14 animate-rotate-slow z-10">
            <Image src="/assets/images/svgs/yellowflower.svg" alt="Purple Flow" fill className="object-contain" />
        </div>

        {/* yellow flower - top section */}
        <div className="absolute top-[30%] left-[40%] w-14 h-14 animate-rotate-slow z-10">
            <Image src="/assets/images/svgs/yellowflower.svg" alt="Purple Flow" fill className="object-contain" />
        </div>

        {/* category section flowers*/}
        <div className="absolute top-[45%] left-[2%] w-10 h-10 lg:w-30 lg:h-30 animate-float-soft opacity-20 z-10">
            <Image src="/assets/images/svgs/pinkflower.svg" alt="Pink Flower" fill className="object-contain" />
        </div>
        <div className="absolute top-[60%] right-[2%] w-10 h-10 lg:w-30 lg:h-30 animate-float-soft opacity-20 z-10">
            <Image src="/assets/images/svgs/purpleflow.svg" alt="Pink Flower" fill className="object-contain" />
        </div>

        {/* Yellow Plus - top right */}
        <div className="absolute top-[20%] right-[10%] w-8 h-8 animate-float-soft z-10">
            <Image src="/assets/images/svgs/yellowplus.svg" alt="Yellow Plus" fill className="object-contain" />
        </div>

        {/* Scribble Left */}
        <div className="absolute bottom-[30%] left-[2%] w-12 h-12 animate-float-soft z-10">
            <Image src="/assets/images/svgs/star.svg" alt="Scribble" fill className="object-contain" />
        </div>
    </>
  );
};

export default Decorations;
