"use client";

import About from "@/components/About";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import PopularTour from "@/components/PopularTour";
import TopDestinations from "@/components/TopDestinations";
import TopHotspsts from "@/components/TopHotspsts";
import TrendingDestinations from "@/components/TrendingDestinations";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <TopDestinations />
      <OurTeam />
      <GetToKnow />
      <PopularTour />
      <TopHotspsts />
      <TrendingDestinations />
    </div>
  );
};

export default page;
