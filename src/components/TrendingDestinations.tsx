import { trendingDestinations } from "@/lib/data";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./shared/Button";

const TrendingDestinations = () => {
  return (
    <section id="trendingDestinations" className="bg-foreground">
      <div className="wrapper py-[5rem] space-y-12">
        <div className="flex flex-col items-center leading-tight">
          <p className="title">Tending Destination</p>
          <h1 className="lg:w-[35rem] text-center">
            The most searched for cities on Triptopia
          </h1>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
            {trendingDestinations.map((item, i) => (
              <TrendingDestinationCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;

export type DestinationType = {
  title: string;
  stars: number;
  ratings: number;
  price: number;
  image: string;
};
const TrendingDestinationCard = (props: DestinationType) => {
  return (
    <div className="bg-background rounded-xl flex gap-4 p-6">
      <div>
        <Image src={props.image} width={160} height={160} alt={props.title} />
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-semibold">{props.title}</p>
        <div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {props.stars}({props.ratings})
          </div>
          <div className="text-2xl font-semibold">
            ${props.price}
            <span className="text-base font-normal">/Night</span>
          </div>
        </div>
        <Button className="bg-secondary py-2 px-4 line-clamp-1">
          Book Now
        </Button>
      </div>
    </div>
  );
};
