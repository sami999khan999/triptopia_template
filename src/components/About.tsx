import { Phone, Plane } from "lucide-react";
import React from "react";
import Button from "./shared/Button";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="wrapper my-[6rem] flex flex-col lg:flex-row justify-around"
    >
      <div className="space-y-2 text-primary-foreground">
        <p className="title">Get to know us</p>
        <h1 className="max-w-[32rem] leading-tight">
          Experience the World With Triptopia
        </h1>
        <p className="max-w-[36rem] ">
          Triptopia was born out of a shared passion for exploration and a
          desire to create meaningful travel experiences. We believe travel is
          more than just visiting a place;
        </p>

        <p className="text-primary-foreground bg-[#DEF2F0] lg:text-2xl text-xl font-semibold p-8 max-w-[38rem] mt-3">
          The world is a book and those who do not travel read only one page.
        </p>

        <div className="text-primary-foreground space-y-3">
          <span className="flex gap-2 text-lg font-semibold">
            <Plane fill="currentcolor" /> To curate personalized itineraries
          </span>
          <span className="flex gap-2 text-lg font-semibold">
            <Plane fill="currentcolor" /> We believe travel fosters
            understanding
          </span>
        </div>

        <Button size={"lg"} className="mt-4">
          Discover More
        </Button>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src={"/about/about-1.png"}
          width={526}
          height={711}
          alt="About Img"
          className="2xl:w-[526px] md:w-[400px]"
        />

        <Image
          src={"/about/about-2.png"}
          width={514}
          height={514}
          alt="About Img"
          className="absolute lg:-bottom-6 2xl:-right-24 md:-right-10 2xl:w-[514px] md:w-[380px]"
        />

        <div className="bg-primary p-5 lg:w-[195px] text-center absolute capitalize text-foreground bottom-[7rem] -left-[100px]">
          <div className="bg-primary-foreground text-background rounded-full w-fit p-3 border-2 border-background absolute -top-[1.7rem] left-1/2 -translate-x-1/2">
            <Phone fill="currentcolor" />
          </div>
          <div className="space-y-3 mt-6">
            <p className="font-semibold">Do you have any questions</p>
            <div>
              <p className="text-xs">Call us any time</p>
              <p>(951) 852 456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
