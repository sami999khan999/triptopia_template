"use client";

import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import TopDestinations from "@/components/TopDestinations";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <TopDestinations />
      <OurTeam />
    </div>
  );
};

export default page;
