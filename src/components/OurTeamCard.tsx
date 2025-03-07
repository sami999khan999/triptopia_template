import Image from "next/image";
import React from "react";

interface OutTeamDataType {
  name: string;
  position: string;
  image: string;
}

const OurTeamCard = (item: OutTeamDataType) => {
  return (
    <div className="bg-primary-foreground w-full rounded-lg relative ">
      <div className="absolute  lg:w-[263px] w-[200px] aspect-square rounded-full border border-primary-foreground left-1/2 -translate-x-1/2 lg:-top-44 -top-24 flex items-center justify-center cursor-pointer">
        <div className="z-50 relative">
          <Image
            src={item.image}
            width={233}
            height={233}
            alt={item.name}
            className="rounded-full lg:w-[233px] w-[180px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center pb-[3rem] pt-[8rem] space-y-2">
        <p className="text-foreground text-4xl font-semibold">{item.name}</p>
        <p className="text-foreground text-sm">{item.position}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
