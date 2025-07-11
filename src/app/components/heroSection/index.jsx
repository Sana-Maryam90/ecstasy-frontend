"use client";

import Image from "next/image";
import Button from "../ui/button";
import Navbar from "../navbar";

const HeroSection = () => {
  return (
    <main className="relative flex flex-col-reverse lg:flex-row min-h-[90vh] lg:h-screen bg-[#F9F4EF] overflow-hidden">
      {/* Floating SVGs */}
      <Navbar />
      {/* <div className="absolute top-[70%] left-[2%] w-8 h-8 lg:w-10 lg:h-10 animate-pulse z-10">
        <Image
          src="/assets/images/svgs/pinkflower.svg"
          alt="Pink Flower"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-[10%] right-[6%] w-8 h-8 lg:w-10 lg:h-10 animate-bounce z-10">
        <Image
          src="/assets/images/svgs/purpleflow.svg"
          alt="Purple Flow"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[15%] right-[35%] w-8 h-8 lg:w-10 lg:h-10 animate-ping z-10">
        <Image
          src="/assets/images/svgs/yellowplus.svg"
          alt="Yellow Plus"
          fill
          className="object-contain"
        />
      </div> */}

      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 py-10 font-orelega text-3xl sm:text-4xl lg:text-5xl">
        <p>
          Where your{" "}
          <span className="bg-[url('/assets/images/svgs/blue.svg')] bg-cover bg-center px-2">
            paper
          </span>{" "}
          dreams find their spark.
        </p>
        <div className="mt-6">
          <Button
            txt="Explore"
            className="w-[160px] sm:w-[180px] h-[45px] sm:h-[50px] text-base sm:text-lg lg:text-xl"
          />
        </div>
      </div>

      {/* Right Notebook Image */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] lg:h-full">
        <Image
          src="/assets/images/JPEGs/notebook.jpg"
          alt="Notebook Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default HeroSection;
