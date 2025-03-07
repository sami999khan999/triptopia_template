import { topDestinationData } from "@/lib/data";
import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const TopDestinations = () => {
  return (
    <section
      id="destinations"
      className="wrapper my-[6rem] bg-foreground lg:py-[5rem] py-6 lg:px-[3rem] px-4 space-y-14 rounded-xl"
    >
      <div className="text-primary-foreground flex flex-col items-center text-center ">
        <p className="title">TOP DESTINATION</p>
        <h1>Search a best place in the world</h1>
        <p className="lg:w-[38rem]">
          Our dating website offers a range of features and benifits that make
          finding love online simple and enjoyable. With our advanced matching
          algorithm
        </p>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {topDestinationData.map((item, i) => (
          <TopDestinationCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
