import Image from "next/image";
import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="bg-[#C4C4C4]">
      <div className="lg:px-20 px-2 py-[8rem] flex w-full flex-col lg:flex-row">
        <div className="space-y-20 flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[50%] ">
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <p className="bg-[#FEFA17] w-fit px-6 py-4 rounded-full text-lg text-muted font-semibold ">
              Luxury Travel Redefined
            </p>
            <h1 className="text-muted lg:w-[30rem] leading-snug">
              Your Passport to Global Glamour
            </h1>

            <p className="lg:w-[18rem] lg:pl-6">
              Personalized Travel Experiences Expert Destination Knowledge
              Exceptional Customer Service
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-2">
            <Image
              src={"/play-store-logo.png"}
              width={190}
              height={70}
              alt="Play Store Logo"
              className="cursor-pointer"
            />

            <Image
              src={"/apple-logo.png"}
              width={190}
              height={70}
              alt="apple Logo"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
