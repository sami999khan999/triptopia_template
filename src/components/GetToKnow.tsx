import { getToKnowUsData } from "@/lib/data";
import Image from "next/image";
import React, { FC } from "react";

const GetToKnow = () => {
  return (
    <section id="getToKnowUs" className="wrapper py-[6rem]">
      <div className="flex flex-col items-center text-center text-primary-foreground gap-3">
        <p className="title">GET TO KNOW US</p>
        <h1 className="lg:w-[35rem]">Experience the World With Triptopia</h1>
        <p className="lg:w-[40rem]">
          Our dating website offers a range of features and benifits that make
          finding love online simple and enjoyable. With our advanced matching
          algorithm
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around lg:gap-4 gap-8 mt-[4rem] items-center">
        <div className="flex flex-col lg:gap-28 gap-8">
          <GetToKnowUsDetails {...getToKnowUsData[0]} />
          <GetToKnowUsDetails {...getToKnowUsData[1]} />
        </div>
        <div>
          <Image
            src={"/getToKnow/getToKnowUs.png"}
            width={620}
            height={595}
            alt="Get To Know Us"
            className="hidden lg:block"
          />
        </div>
        <div className="flex flex-col lg:gap-28 gap-8">
          <GetToKnowUsDetails {...getToKnowUsData[2]} />
          <GetToKnowUsDetails {...getToKnowUsData[3]} />
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;

interface GetKnowUsDataType {
  title: string;
  description: string;
  image: string;
}
const GetToKnowUsDetails: FC<GetKnowUsDataType> = (props) => {
  return (
    <div className="space-y-2 flex flex-col items-center lg:items-start">
      <Image src={props.image} width={60} height={60} alt={props.image} />
      <div className="text-primary-foreground space-y-2 flex flex-col items-center lg:items-start">
        <p className="text-2xl font-semibold">{props.title}</p>
        <p className="w-[20rem] text-center lg:text-start">
          {props.description}
        </p>
      </div>
    </div>
  );
};
