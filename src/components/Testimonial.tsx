import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { testimonialData } from "@/lib/data";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="wrapper py-[5rem] flex flex-col items-center overflow-x-hidden"
    >
      <div className="flex flex-col items-center leading-tight">
        <p className="title">Testimonial</p>
        <h1 className="lg:w-[35rem] text-center">
          What Our Traveller Said About Us
        </h1>
      </div>

      <div className="w-full lg:w-[80%]  h-[30rem] mt-10">
        <Carousel>
          <CarouselContent>
            {testimonialData.map((item, i) => (
              <CarouselItem key={i}>
                <TestimonialCard {...item}></TestimonialCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious
              className="rounded-sm border-gray-400"
              size={"lg"}
            />
            <CarouselNext className="rounded-sm border-gray-400" size={"lg"} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;

interface TestimonialProps {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: FC<TestimonialProps> = (props) => {
  return (
    <div className="border border-secondary rounded-lg flex flex-col items-center justify-center mt-10 h-[20rem]">
      <div className="rounded-full overflow-hidden w-[80px] absolute top-0 z-40">
        <Image src={props.image} width={100} height={100} alt={props.name} />
      </div>

      <div className="lg:w-[70%] px-5 text-center py-[3rem] text-primary-foreground space-y-4">
        <p>{props.testimonial}</p>
        <div className="space-y-2">
          <p className="text-2xl font-semibold ">{props.name}</p>
          <p className="text-sm">{props.position}</p>
        </div>
      </div>
    </div>
  );
};
