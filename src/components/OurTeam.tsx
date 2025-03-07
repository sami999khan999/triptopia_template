import { outTeamData } from "@/lib/data";
import React from "react";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <section id="ourTeam" className="wrapper my-[6rem]">
      <div className="flex flex-col items-center text-center leading-tight">
        <p className="title">our team</p>
        <h1 className="lg:w-[35rem]">
          Meet the Creative Minds Behind Triptopia
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:gap-6 gap-36 mt-[14rem]">
        {outTeamData.flatMap((item, i) => (
          <OurTeamCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
