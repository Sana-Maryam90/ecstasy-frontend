"use client";

import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <main className="relative flex h-screen bg-[#F9F4EF] overflow-hidden">
      {/* Floating SVGs – responsive & optimized */}
      <div className="absolute top-[300px] left-[1%] w-10 h-10 animate-pulse z-10">
        <Image
          src="/assets/images/svgs/pinkflower.svg"
          alt="Pink Flower"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-[100px] right-[5%] w-10 h-10 animate-bounce z-10">
        <Image
          src="/assets/images/svgs/purpleflow.svg"
          alt="Purple Flow"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[120px] right-[28%] w-10 h-10 animate-ping z-10">
        <Image
          src="/assets/images/svgs/yellowplus.svg"
          alt="Yellow Plus"
          fill
          className="object-contain"
        />
      </div>

      {/* Left Text Section */}
      <div className="w-1/2 flex flex-col justify-center px-10 font-orelega text-5xl">
        <p>
          Where your{" "}
          <span className="bg-[url('/assets/images/svgs/blue.svg')] bg-cover bg-center">
            paper
          </span>{" "}
          dreams find their spark.
        </p>
        <div className="mt-6 ml-[5%]">
          <Button
            txt="Explore"
            className="w-[180px] h-[50px] rounded-[50px] text-l"
          />
        </div>
      </div>

      {/* Right Notebook Image */}
      <div className="flex-1 relative h-full">
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
