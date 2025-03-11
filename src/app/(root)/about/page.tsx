import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <About />

      <div className="bg-foreground py-[6rem] lg:px-10 px-4">
        <div className="wrapper relative h-[200px] lg:h-[450px] 2xl:h-[650px] w-full ">
          <Image
            src="/location.png"
            layout="fill"
            objectFit="cover"
            alt="Our Location"
          />
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default page;
