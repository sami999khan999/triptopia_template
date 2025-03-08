"use client";

import About from "@/components/About";
import BlogFeed from "@/components/BlogFeed";
import Faq from "@/components/Faq";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import PopularTour from "@/components/PopularTour";
import Testimonial from "@/components/Testimonial";
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
      <Testimonial />
      <Faq />
      <BlogFeed />
    </div>
  );
};

export default page;
