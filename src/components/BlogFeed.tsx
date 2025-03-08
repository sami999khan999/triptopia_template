import { blogFeedData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const BlogFeed = () => {
  return (
    <section id="blog" className="wrapper py-[6rem] space-y-12">
      <div className="leading-tight flex flex-col items-center text-center">
        <p className="title">Blog</p>
        <h1 className="lg:w-[38rem]">
          Tips and Tricks for Planning Your Dream Trip
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
        {blogFeedData.map((item, i) => (
          <BlogFeedCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BlogFeed;

interface BlogFeedType {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  type: string;
  authorImage: string;
}
const BlogFeedCard = (props: BlogFeedType) => {
  return (
    <div className="w-full border border-gray-200 overflow-hidden rounded-xl">
      <div className="h-[264px] relative">
        <Image
          src={"/blog-feed.png"}
          layout="fill"
          objectFit="cover"
          alt={props.title}
        />
        <div className="absolute bg-primary text-foreground w-16 text-center p-4 top-6 left-6 rounded-md">
          {props.date}
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-primary">{props.type}</p>
          <p className="text-2xl text-primary-foreground font-semibold line-clamp-2">
            {props.title}
          </p>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className="h-[40px] aspect-square overflow-hidden rounded-full relative">
            <Image
              src={props.authorImage}
              objectFit="cover"
              layout="fill"
              alt={props.author}
            />
          </div>
          <p className="font-semibold text-lg text-primary-foreground">
            {props.author}
          </p>
        </div>
      </div>
    </div>
  );
};
