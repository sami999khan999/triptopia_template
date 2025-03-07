"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import TopDestinations from "@/components/TopDestinations";

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
