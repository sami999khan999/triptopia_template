import Image from "next/image";
import React, { FC } from "react";

interface TopDestinationType {
  name: string;
  destinationCount: number;
  image: string;
}

const TopDestinationCard: FC<TopDestinationType> = (item) => {
  return (
    <div className="border border-gray-200 p-8 rounded-xl space-y-3">
      <div className="w-[70px] aspect-square rounded-lg overflow-hidden">
        <Image src={item.image} width={70} height={70} alt={item.name} />
      </div>
      <div className="capitalize space-y-2">
        <p className="lg:text-2xl text-xl font-semibold line-clamp-1">
          {item.name}
        </p>
        <p className="text-primary-foreground text-xs line-clamp-1 lg:text-base">
          {item.destinationCount} Destinations
        </p>
      </div>
    </div>
  );
};

export default TopDestinationCard;
