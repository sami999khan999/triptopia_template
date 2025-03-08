"use client";

import { popularTourData, popularTureCategory } from "@/lib/data";
import { Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Button from "./shared/Button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PopularTour = () => {
  const [selectedCtegory, setSelectedCategory] = useState<string>(
    popularTureCategory[0].name
  );

  return (
    <section id="popularTour" className="wrapper my-[6rem]">
      <div className="flex flex-col items-center leading-tight">
        <p className="title">Popular Tour</p>
        <h1 className="lg:w-[35rem] text-center">
          See Destinations You’ll Love To Visit
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-12 mb-8 lg:gap-8 gap-3 text-primary-foreground text-lg">
        {popularTureCategory.map((item, i) => (
          <div
            key={i}
            className={cn(
              "px-5 py-2 rounded-full cursor-pointer transition-all duration-200",
              selectedCtegory === item.name
                ? "border-2 "
                : "border-2 border-transparent"
            )}
            onClick={() => setSelectedCategory(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Grid layout for 3 cards per row */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {popularTourData.map((item, i) => (
          <PopularTourCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PopularTour;

interface PopularTourDataType {
  title: string;
  location: string;
  price: number;
  stars: number;
  reviews: number;
  image: string;
}

const PopularTourCard = (props: PopularTourDataType) => {
  return (
    <div className="w-full border border-gray-300 overflow-hidden rounded-xl">
      <div className="h-[257px] relative">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt={props.title}
        />
        <Button
          className="absolute top-4 right-4 z-30 rounded-full text-muted 
          bg-foreground hover:text-primary hover:bg-foreground"
          size={"icon"}
        >
          <Heart size={15} />
        </Button>
      </div>

      <div className="text-primary-foreground lg:p-8 p-4 h-fit">
        <div className="space-y-3">
          <div className="flex gap-1 items-center">
            <MapPin size={20} className="text-primary" fill="currentColor" />
            <p>{props.location}</p>
          </div>

          <p className="text-xl text-primary-foreground line-clamp-1 font-semibold">
            {props.title}
          </p>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(Math.floor(props.stars))].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-gray-500 text-sm">{props.stars}</span>
            <span className="text-gray-500  text-sm">
              ({props.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-2xl font-semibold">
            ${props.price}
            <span className="text-base font-normal">/Person</span>
          </div>
          <Button className="text-sm">Book Trip</Button>
        </div>
      </div>
    </div>
  );
};
